(function(){portalGGA.views.BaseModal=Backbone.View.extend({events:{"click [data-pd-action]":"triggerEvent",},initialize:function(){var c=this;
_.bindAll(this,"triggerEvent");
this.$el.html(baseModalTemplate());
$("body").append(this.$el);
$('[data-pd="modal"]').on("click",function(g){g.preventDefault();
var h=$(this).attr("data-pd-title");
var d=$(this).attr("data-pd-size");
var f=$($(this).attr("href"));
c.getModalContent(f).always(function(e){c.show(h,e,d)
})
})
},show:function a(f,e,d,c){$("#baseModal").find(".modal-dialog").removeClass().addClass("modal-dialog");
$("#baseModal").find(".modal-title").html(f);
$("#baseModalContent").html(e);
if(d){$("#baseModal").find(".modal-dialog").addClass("modal-"+d)
}$("#baseModal").modal("show");
$("#baseModal").off("shown.bs.modal").on("shown.bs.modal",function(){if(typeof popovers=="function"){popovers()
}});
$("#baseModal").off("hidden.bs.modal").on("hidden.bs.modal",function(){$("#baseModalContent").html("");
if(typeof c==="function"){c()
}})
},hide:function b(){$("#baseModal").modal("hide")
},loadModalContentFromUrl:function(d){var c=$.Deferred();
$.get(d).done(function(e){c.resolve(e)
}).fail(function(e){c.reject(e)
});
return c
},getModalContent:function(f){var e=$.Deferred(),d=this;
var c=f.find('[data-pd-loadcontent="true"]');
if(c.length>0&&c.html().length==0){d.loadModalContentFromUrl(c.attr("data-pd-content-url")).done(function(g){c.html(g);
e.resolve(f.html())
})
}else{e.resolve(f.html())
}return e
},triggerEvent:function(d){d&&d.preventDefault();
var c=$(d.currentTarget).attr("data-pd-action");
this.trigger(c)
}})
}());