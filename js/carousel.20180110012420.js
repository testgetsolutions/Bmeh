(function(f,b,d){portalGGA.views.Carousel=Backbone.View.extend({constructor:function e(g){Backbone.View.apply(this,arguments);
this.gameConfig=$.parseJSON(g.gameConfig);
this.carouselID=$.parseJSON(g.carouselID);
this.carouselImg=$.parseJSON(g.carouselImg);
this.carouselImg2x=$.parseJSON(g.carouselImg2x);
this.carouselImgMobile=$.parseJSON(g.carouselImgMobile);
this.carouselImgMobile2x=$.parseJSON(g.carouselImgMobile2x);
this.carouselUrl=$.parseJSON(g.carouselUrl);
this.carouselTitle=$.parseJSON(g.carouselTitle);
this.carouselDesc=$.parseJSON(g.carouselDesc);
this.newWindow=$.parseJSON(g.newWindow);
this.renderCarousel()
},renderCarousel:function c(){var g=this;
var k={};
for(var h=0;
h<g.carouselID.length;
h++){if(g.carouselUrl[h].indexOf("/content/")!=-1&&g.carouselUrl[h].indexOf(".html")==-1){g.carouselUrl[h]=g.carouselUrl[h]+".html"
}k[g.carouselID[h]]={imageID:g.carouselID[h],carouselIndex:h+1,imageName:g.carouselImg[h],imageName2x:g.carouselImg2x[h],imageNameMobile:g.carouselImgMobile[h],imageNameMobile2x:g.carouselImgMobile2x[h],imageUrl:g.carouselUrl[h],imageTitle:g.carouselTitle[h],imageDesc:g.carouselDesc[h],imageOpenWindow:g.newWindow[h]}
}console.log("Carousel Items...",k);
this.$("#carousel").append(carouselItemTemplate({games:k}));
window.picturefill();
var i=$("#carousel");
j(i);
function j(l){i.slick({centerPadding:0,autoplay:true,dots:true,pauseOnHover:true,arrows:true,autoplaySpeed:3000,prevArrow:"<div class='carousel-prev'><span class='carousel-prev glyphicon glyphicon-chevron-left'></span></div>",nextArrow:"<div class='carousel-next'><span class='glyphicon glyphicon-chevron-right'></span></div>",onInit:function(){g.carouselHeight()
}})
}$(window).resize(function(){setTimeout(function(){g.carouselHeight()
},1000)
});
setTimeout(function(){g.carouselHeight()
},1000);
return this.$el
},carouselHeight:function a(){var h=$("html").width();
var i=992;
var g=$("#carousel").height();
if(h>i&&h<1110){$(".giveCarouselHeight").outerHeight(g)
}else{$(".giveCarouselHeight").height("")
}}})
}(portalGGA.models.Draws,_,portalGGA.utils.session));