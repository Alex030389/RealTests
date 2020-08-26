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

$('.btn-modal-2').magnificPopup({
  type:'inline',
  showCloseBtn:false,
  callbacks: {
    open: function() {
      $('.mod-simulator-tour__img').each(function(ind, elem) {
        $(elem).attr('src', $(elem).data('src'));
      })
      $('.modal__btn-close').on('click',function(){
        $.magnificPopup.close();
      });
    }
  }
});
