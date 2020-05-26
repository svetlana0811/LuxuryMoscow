

(function() {
    function addSeperator(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    }

    function rangeInputChangeEventHandler(e){
        var rangeGroup = $(this).attr('name'),
            minBtn = $(this).parent().children('.min'),
            maxBtn = $(this).parent().children('.max'),
            range_min = $(this).parent().children('.range_min'),
            range_max = $(this).parent().children('.range_max'),
            minVal = parseInt($(minBtn).val()),
            maxVal = parseInt($(maxBtn).val()),
            origin = $(this).className;

        if(origin === 'min' && minVal > maxVal-5){
            $(minBtn).val(maxVal-5);
        }
        var minVal = parseInt($(minBtn).val());
        $(range_min).html(addSeperator(minVal*1000) + ' €');


        if(origin === 'max' && maxVal-5 < minVal){
            $(maxBtn).val(5+ minVal);
        }
        var maxVal = parseInt($(maxBtn).val());
        $(range_max).html(addSeperator(maxVal*1000) + ' €');
    }

 $('input[type="range"]').on( 'input', rangeInputChangeEventHandler);
})();


$(document).ready(function($) {

$('.selectedLanguage').on('click', function(event) {
	$(this).closest('.languages').find('.allLanguages').slideToggle();
	$('.selectedLanguage p i').toggleClass('rotatedIcon');
});


//  carousel slider

  $(".owlCarouselSingl").owlCarousel({
	items: 1,
	loop:true,
	navigation : false, 
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true,
	autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 3500,
 
  });
 $(".owlCarouselBrends").owlCarousel({
	items: 6,
	loop:true,
	navigation : false, 
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true,
	autoplay: false,
    smartSpeed: 2000,
    autoplayTimeout: 3500,
 
  responsive:{
	0 : {
        items : 2,
        
		},
    480 : {
        items : 3,
        
		},
    768 : {
        items : 4,
        
		},
    1024 : {
        items : 5,
        
		},
    1366 : {
        items : 6,
        
		}
    }
  });
 $(".owlCarouselTopProd").owlCarousel({
	items: 4,
	loop:true,
	navigation : false, 
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true,
	autoplay: false,
    smartSpeed: 2000,
    autoplayTimeout: 3500,
 responsive:{
	0 : {
        items : 2,
        
		},
    
    768 : {
        items : 3,
        
		},
    1024 : {
        items : 4,
        
		}
    }
  });
 $(".owlCarouselOurWorks").owlCarousel({
	items: 1,
	loop:true,
	nav: true,
	dots:false,
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true,
	autoplay: false,
    smartSpeed: 2000,
    autoplayTimeout: 3500,
 
  });
 

	var lengthy = $('.owlCarouselBrends .item').closest('.active');
	lengthy.first().addClass('noBorder')
	setInterval(function(){
		$('.owl-item').removeClass('noBorder');
	 	var lengthy = $('.owlCarouselBrends .item').closest('.active');
		lengthy.first().addClass('noBorder')
	}, 1000);
	
	$("#uploadPhotoOld").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
    $("#uploadPhotoFutur").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoadedNew;
            reader.readAsDataURL(this.files[0]);
        }
    });
function imageIsLoaded(e) {
    $('.openImageAfterUpload img').attr('src', e.target.result);
     $('.openImageAfterUpload p').hide();
    // $('.openImageAfterUpload').html('<img src=""')
};
function imageIsLoadedNew(e) {
    $('.newPhotoUpload img').attr('src', e.target.result);
     $('.newPhotoUpload p').hide();
    // $('.openImageAfterUpload').html('<img src=""')
};

$('body').delegate('.filterType', 'click', function(event) {	
	if ($(window).width() <= 768) {
		$(this).closest('.selectFilterItem').find('.showHideInMobile').slideToggle();
	}
});
$(window).resize(function(event) {
	if ($(window).width() > 768) {
		$('.showHideInMobile').show();
	}
});

$('.showAsIcons').on('click',  function(event) {
	$('.showAsIcons').removeClass('active');
	$(this).addClass('active');
});

$('.showAsList').on('click', function(event) {
	$('.productItems .items').addClass('listItem');
	$('.forList').addClass('listItem');
	$('.colorParts').addClass('listItem');
	$('.productItems .items .infoOfTop p').addClass('listItem');
	$('.productItems .items .moreInfo').addClass('listItem');
	$('.productItems .items .imageOfTop').addClass('listItem');
});
$('.showAsGreed ').on('click', function(event) {
	$('.productItems .items').removeClass('listItem');
	$('.forList').removeClass('listItem');
	$('.colorParts').removeClass('listItem');
	$('.productItems .items .infoOfTop p').removeClass('listItem');
	$('.productItems .items .moreInfo').removeClass('listItem');
	$('.productItems .items .imageOfTop').removeClass('listItem');
});

$('.owl-next span').html('<i class="fas fa-caret-right"></i>')
$('.owl-prev span').html('<i class="fas fa-caret-left"></i>')

$('#image-gallery').lightSlider({
    gallery:true,
    item:1,
    thumbItem:4,
    slideMargin: 0,
    speed:500,
    loop:true,
    onSliderLoad: function() {
        $('#image-gallery').removeClass('cS-hidden');
    }  
});

$('.orderButton').on('click', function(event) {

	$('.fixedContact').css('display', 'flex');
});
$('.orderSubmit button').on('click', function(event) {
	event.preventDefault();
	$('.fixedContact').css('display', 'flex');
});

$('.closeContact').on('click', function(event) {
	
	$('.fixedContact').css('display', 'none');
});





$('.plusCount').on('click',  function(event) {
	var count = parseInt($(this).closest('.gramCarat>div').find('input').val()) + 1;
	$(this).closest('.gramCarat>div').find('input').val(count);
});
$('.minusCount').on('click',  function(event) {
	var count = parseInt($(this).closest('.gramCarat>div').find('input').val()) - 1;
	$(this).closest('.gramCarat>div').find('input').val(count);
});



$('.menuIcon').on('click', function(event) {
	$('.mobileMenuOpened').slideToggle();
});
$('.menuSearch p i').on('click', function(event) {
	$('.searchInputMobile').slideToggle();
});

});

