/* tslint:disable:typedef */
import {throwError} from 'rxjs';
import {ValidationErrors} from '@angular/forms';
import moment from 'moment';
import sweetAlert from 'sweetalert';

export class Utils {
  static getDatatableOptions(ordering: boolean = true) {
    return {
      pagingType: 'full_numbers',
      destroy: true,
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel'
      ],
      ordering
    };
  }

  static rerender(dtElement, dtTrigger): void {
    dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      dtTrigger.next();
    });
  }

  static isLoggedIn() {
    const token = sessionStorage.getItem('token');
    return token != null && token !== '';
  }

  static handleErrors(error: Response) {
    // console.log(error);
    return throwError(error);
  }

  static titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }

  static getFormValidationErrors(form) {
    Object.keys(form.controls).forEach(key => {
      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          sweetAlert('Error', Utils.titleCase('Please enter valid ' + key), 'error');
          return;
          // console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }

  static arrayRemove(arr, value) {
    // console.log(value);
    return arr.filter((ele) => {
      return ele !== value;
    });

  }

  static getError(err) {
    let errorMsg = err.message;
    if (!errorMsg) {
      errorMsg = 'Uh-Oh. Something went wrong. Please try again later';
    }
    return errorMsg;
  }

  static parseISOString(s) {
    return moment().from(new Date(s));
  }

  static downloadFile(header: any, data: any, filename: string, format: string = null) {
    const replacer = (key, value) => value === null ? '' : value;
    const csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');

    const a = document.createElement('a');
    const blob = new Blob([csvArray], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = filename + (format ? format : '.csv');
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }


}
