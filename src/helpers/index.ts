//import Swal from "sweetalert2";  

import Swal from "sweetalert2";


export const f_MessageProcess = ( pTitle: string, pMessage: string,pTypeMessage: any) => {

    Swal.fire({
        title: pTitle,
        text: pMessage,
        icon: pTypeMessage
      });
}

export const f_ToastAlert = (pTypeAlert: any,pMessage: string) => {

    const Toast: any = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: pTypeAlert,
      title: pMessage
    });

}
