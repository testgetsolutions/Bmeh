(function(a,b,d){portalGGA.views.QuickDrawBanner=Backbone.View.extend({constructor:function c(f){Backbone.View.apply(this,arguments);
this.el=f.el;
this.displayGame=f.displayGame||new portalGGA.models.KenoFeed();
this.displayGame.fetch().then(b.bind(this._displayWinner,this))
},_displayWinner:function e(){var f=this;
var h=f.displayGame.toJSON();
var j=0;
var i=null;
if(h.productId==22){if(location.href.indexOf("/es/home.html")!=-1){$("#quickDrawRet").attr("href","/content/portal/es/retailer.html")
}if(h.date!=null&&h.shareCount!=null){var g=portalGGA.utils.dayValue(h.date);
if(location.href.indexOf("/es/home.html")!=-1){switch(g){case"MONDAY":g="LUNES";
break;
case"TUESDAY":g="MARTES";
break;
case"WEDNESDAY":g="MIÉRCOLES";
break;
case"THURSDAY":g="JUEVES";
break;
case"FRIDAY":g="VIERNES";
break;
case"SATURDAY":g="SÁBADO";
break;
case"SUNDAY":g="DOMINGO";
break
}}if(location.href.indexOf("/es/home.html")!=-1){i="En "+g+"  "+h.date+", hubo "+portalGGA.utils.currencyCountFormatted(h.shareCount)+" ganadores de Quick Draw!"
}else{i="ON "+g+"  "+h.date+", THERE WERE  "+portalGGA.utils.currencyCountFormatted(h.shareCount)+" QUICK DRAW WINNERS!"
}$("#quickDrawWinners").removeClass("hide");
$("#quickDrawWinners").addClass("show");
$("#quickDrawBanner").html(i)
}}}})
}(portalGGA.models.LuckyLocation,_,portalGGA.utils.session));