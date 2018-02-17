(function(f,c,e){portalGGA.views.Games=Backbone.View.extend({constructor:function d(h){Backbone.View.apply(this,arguments);
this.gameConfig=$.parseJSON(h.gameConfig);
this.draws=h.draws||new f();
this.numberGameDraws=h.numberGameDraws||new f();
this.portalGameCode=$.parseJSON(h.portalGameCode);
c.bindAll(this,"displayJackpotGames");
this.linkURL=$.parseJSON(h.linkURL);
var k=[];
var j=[];
var i=this.gameConfig;
c.each(this.portalGameCode,function(m){var l=portalGGA.utils.getGameConfigByPortalGameName(m,i);
if(l){if(l.portalGameCode!="PICK3"&&l.portalGameCode!="PICK4"){k.push(l.esaGameName)
}else{j.push(l.esaGameName)
}}});
var g=this;
if(k&&k.length>0&&j&&j.length>0){this.draws.fetch({data:{"previous-draws":1,"next-draws":0,"game-names":k.toString()},error:function(l){},success:function(l){g.numberGameDraws.fetch({data:{"previous-draws":2,"next-draws":0,"game-names":j.toString()},error:function(m){},success:function(m){g.displayJackpotGames();
g.showOrHideGameTiles();
if(location.href.indexOf("/es/")!=-1){$(".draw-game-jackpots--es #drawGameJackpots .game-tile").matchHeight()
}g.$("#drawGameJackpots .game-tile").matchHeight();
$("#drawGameJackpots > div > div").matchHeight()
}})
}})
}else{if(k&&k.length>0&&j&&j.length==0){this.draws.fetch({data:{"previous-draws":1,"next-draws":0,"game-names":k.toString()},error:function(l){},success:function(l){g.displayJackpotGames();
g.showOrHideGameTiles();
g.$("#drawGameJackpots .game-tile").matchHeight();
$("#drawGameJackpots > div > div").matchHeight()
}})
}else{if(k&&k.length==0&&j&&j.length>0){this.numberGameDraws.fetch({data:{"previous-draws":2,"next-draws":0,"game-names":j.toString()},error:function(l){},success:function(l){g.displayJackpotGames();
g.showOrHideGameTiles();
g.$("#drawGameJackpots .game-tile").matchHeight();
$("#drawGameJackpots > div > div").matchHeight()
}})
}}}},displayJackpotGames:function a(){var k=this,h;
var m={};
var j={};
var g=false;
var i=false;
c.each(k.numberGameDraws.toJSON(),function(n){h=portalGGA.utils.getGameConfigByEsaGameName(n.gameName,k.gameConfig);
if(n.status=="CLOSED"&&h.portalGameCode=="PICK3"){c.each(n.results,function(o){if(o.drawType.toLowerCase()=="bonus"){g=true
}})
}if(n.status=="CLOSED"&&h.portalGameCode=="PICK4"){c.each(n.results,function(o){if(o.drawType.toLowerCase()=="bonus"){i=true
}})
}});
k.draws.each(function l(n){var o=n.toJSON();
if(!m[o.gameName]){h=portalGGA.utils.getGameConfigByEsaGameName(o.gameName,k.gameConfig);
if(h.esaGameName==o.gameName){m[o.gameName]={linkURL:k.linkURL[h.portalGameCode],cssName:h.cssName,imageName:h.imageName+".svg",gameName:o.gameName}
}if(h.portalGameCode=="MONOPOLY"){m[h.esaGameName]={linkURL:k.linkURL[h.portalGameCode],cssName:h.cssName,imageName:h.imageName+".svg",gameName:h.esaGameName}
}}m[o.gameName][o.status]=o
});
k.numberGameDraws.each(function l(n){var o=n.toJSON();
if(!j[o.gameName]){h=portalGGA.utils.getGameConfigByEsaGameName(o.gameName,k.gameConfig);
if(h.esaGameName==o.gameName){j[o.gameName]={linkURL:k.linkURL[h.portalGameCode],cssName:h.cssName,imageName:h.imageName+".svg",gameName:o.gameName,hasGreenBall:(h.portalGameCode=="PICK3")?g:i}
}}j[o.gameName][(o.status=="CLOSED")?o.status+o.name:o.status]=o
});
k.$("#drawGameJackpots").html(jackpotGamesTemplate({games:m,numberGames:j}));
if(location.href.indexOf("/es/")!=-1){$(".find_more").hide()
}return this.$el
},showOrHideGameTiles:function b(){if(window.location.href.indexOf("home.html")!=-1){$("#dreamsachanceDiv").hide();
$("#drawGameJackpots").append($("#instantgamesDiv").html())
}else{if(window.location.href.indexOf("dailygames.html")!=-1){$("#instantgamesDiv").hide();
$("#drawGameJackpots").append($("#dreamsachanceDiv").html())
}else{$("#drawGameJackpots").append($("#dreamsachanceDiv").html());
$("#instantgamesDiv").hide()
}}}})
}(portalGGA.models.Draws,_,portalGGA.utils.session));