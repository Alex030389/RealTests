$('.btn-modal').magnificPopup({
  type:'inline',
  showCloseBtn:false,
  callbacks: {
    open: function() {
        $('.modal__btn-close').on('click',function(){
          $.magnificPopup.close();
        });
    }
  }
});
