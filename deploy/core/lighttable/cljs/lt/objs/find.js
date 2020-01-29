// Compiled by ClojureScript 1.9.229 {}
goog.provide('lt.objs.find');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.context');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.util.dom');
goog.require('lt.objs.canvas');
goog.require('lt.objs.keyboard');
goog.require('lt.util.load');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.statusbar');
goog.require('lt.util.style');
goog.require('crate.binding');
lt.objs.find.find_height = (30);
/**
 * 
 */
lt.objs.find.input = (function lt$objs$find$input(this$){
var e__7942__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.find","input.find",-1158996132),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"find"], null)], null));
var seq__17031_17041 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),((function (e__7942__auto__){
return (function (){
var me = this;
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"search!","search!",-612546952),lt.util.dom.val.call(null,me));
});})(e__7942__auto__))
,new cljs.core.Keyword(null,"focus","focus",234677911),((function (e__7942__auto__){
return (function (){
lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"find-bar","find-bar",-216460385),this$);

return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"active","active",1895962068));
});})(e__7942__auto__))
,new cljs.core.Keyword(null,"blur","blur",-453500461),((function (e__7942__auto__){
return (function (){
lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"find-bar","find-bar",-216460385));

return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"inactive","inactive",-306247616));
});})(e__7942__auto__))
], null)));
var chunk__17032_17042 = null;
var count__17033_17043 = (0);
var i__17034_17044 = (0);
while(true){
if((i__17034_17044 < count__17033_17043)){
var vec__17035_17045 = cljs.core._nth.call(null,chunk__17032_17042,i__17034_17044);
var ev__7943__auto___17046 = cljs.core.nth.call(null,vec__17035_17045,(0),null);
var func__7944__auto___17047 = cljs.core.nth.call(null,vec__17035_17045,(1),null);
lt.util.dom.on.call(null,e__7942__auto__,ev__7943__auto___17046,func__7944__auto___17047);

var G__17048 = seq__17031_17041;
var G__17049 = chunk__17032_17042;
var G__17050 = count__17033_17043;
var G__17051 = (i__17034_17044 + (1));
seq__17031_17041 = G__17048;
chunk__17032_17042 = G__17049;
count__17033_17043 = G__17050;
i__17034_17044 = G__17051;
continue;
} else {
var temp__4657__auto___17052 = cljs.core.seq.call(null,seq__17031_17041);
if(temp__4657__auto___17052){
var seq__17031_17053__$1 = temp__4657__auto___17052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17031_17053__$1)){
var c__7604__auto___17054 = cljs.core.chunk_first.call(null,seq__17031_17053__$1);
var G__17055 = cljs.core.chunk_rest.call(null,seq__17031_17053__$1);
var G__17056 = c__7604__auto___17054;
var G__17057 = cljs.core.count.call(null,c__7604__auto___17054);
var G__17058 = (0);
seq__17031_17041 = G__17055;
chunk__17032_17042 = G__17056;
count__17033_17043 = G__17057;
i__17034_17044 = G__17058;
continue;
} else {
var vec__17038_17059 = cljs.core.first.call(null,seq__17031_17053__$1);
var ev__7943__auto___17060 = cljs.core.nth.call(null,vec__17038_17059,(0),null);
var func__7944__auto___17061 = cljs.core.nth.call(null,vec__17038_17059,(1),null);
lt.util.dom.on.call(null,e__7942__auto__,ev__7943__auto___17060,func__7944__auto___17061);

var G__17062 = cljs.core.next.call(null,seq__17031_17053__$1);
var G__17063 = null;
var G__17064 = (0);
var G__17065 = (0);
seq__17031_17041 = G__17062;
chunk__17032_17042 = G__17063;
count__17033_17043 = G__17064;
i__17034_17044 = G__17065;
continue;
}
} else {
}
}
break;
}

return e__7942__auto__;
});
/**
 * 
 */
lt.objs.find.replace_input = (function lt$objs$find$replace_input(this$){
var e__7942__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.replace","input.replace",-2146729607),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"replace"], null)], null));
var seq__17076_17086 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),((function (e__7942__auto__){
return (function (){
var me = this;
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"replace.changed","replace.changed",-309373014),lt.util.dom.val.call(null,me));
});})(e__7942__auto__))
,new cljs.core.Keyword(null,"focus","focus",234677911),((function (e__7942__auto__){
return (function (){
lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"find-bar.replace","find-bar.replace",515998927),this$);

return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"active","active",1895962068));
});})(e__7942__auto__))
,new cljs.core.Keyword(null,"blur","blur",-453500461),((function (e__7942__auto__){
return (function (){
lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"find-bar.replace","find-bar.replace",515998927));

return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"inactive","inactive",-306247616));
});})(e__7942__auto__))
], null)));
var chunk__17077_17087 = null;
var count__17078_17088 = (0);
var i__17079_17089 = (0);
while(true){
if((i__17079_17089 < count__17078_17088)){
var vec__17080_17090 = cljs.core._nth.call(null,chunk__17077_17087,i__17079_17089);
var ev__7943__auto___17091 = cljs.core.nth.call(null,vec__17080_17090,(0),null);
var func__7944__auto___17092 = cljs.core.nth.call(null,vec__17080_17090,(1),null);
lt.util.dom.on.call(null,e__7942__auto__,ev__7943__auto___17091,func__7944__auto___17092);

var G__17093 = seq__17076_17086;
var G__17094 = chunk__17077_17087;
var G__17095 = count__17078_17088;
var G__17096 = (i__17079_17089 + (1));
seq__17076_17086 = G__17093;
chunk__17077_17087 = G__17094;
count__17078_17088 = G__17095;
i__17079_17089 = G__17096;
continue;
} else {
var temp__4657__auto___17097 = cljs.core.seq.call(null,seq__17076_17086);
if(temp__4657__auto___17097){
var seq__17076_17098__$1 = temp__4657__auto___17097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17076_17098__$1)){
var c__7604__auto___17099 = cljs.core.chunk_first.call(null,seq__17076_17098__$1);
var G__17100 = cljs.core.chunk_rest.call(null,seq__17076_17098__$1);
var G__17101 = c__7604__auto___17099;
var G__17102 = cljs.core.count.call(null,c__7604__auto___17099);
var G__17103 = (0);
seq__17076_17086 = G__17100;
chunk__17077_17087 = G__17101;
count__17078_17088 = G__17102;
i__17079_17089 = G__17103;
continue;
} else {
var vec__17083_17104 = cljs.core.first.call(null,seq__17076_17098__$1);
var ev__7943__auto___17105 = cljs.core.nth.call(null,vec__17083_17104,(0),null);
var func__7944__auto___17106 = cljs.core.nth.call(null,vec__17083_17104,(1),null);
lt.util.dom.on.call(null,e__7942__auto__,ev__7943__auto___17105,func__7944__auto___17106);

var G__17107 = cljs.core.next.call(null,seq__17076_17098__$1);
var G__17108 = null;
var G__17109 = (0);
var G__17110 = (0);
seq__17076_17086 = G__17107;
chunk__17077_17087 = G__17108;
count__17078_17088 = G__17109;
i__17079_17089 = G__17110;
continue;
}
} else {
}
}
break;
}

return e__7942__auto__;
});
/**
 * 
 */
lt.objs.find.replace_all_button = (function lt$objs$find$replace_all_button(this$){
var e__7942__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"all"], null));
var seq__17121_17131 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1912301393),((function (e__7942__auto__){
return (function (){
return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"find.replace-all","find.replace-all",-388579908));
});})(e__7942__auto__))
], null)));
var chunk__17122_17132 = null;
var count__17123_17133 = (0);
var i__17124_17134 = (0);
while(true){
if((i__17124_17134 < count__17123_17133)){
var vec__17125_17135 = cljs.core._nth.call(null,chunk__17122_17132,i__17124_17134);
var ev__7943__auto___17136 = cljs.core.nth.call(null,vec__17125_17135,(0),null);
var func__7944__auto___17137 = cljs.core.nth.call(null,vec__17125_17135,(1),null);
lt.util.dom.on.call(null,e__7942__auto__,ev__7943__auto___17136,func__7944__auto___17137);

var G__17138 = seq__17121_17131;
var G__17139 = chunk__17122_17132;
var G__17140 = count__17123_17133;
var G__17141 = (i__17124_17134 + (1));
seq__17121_17131 = G__17138;
chunk__17122_17132 = G__17139;
count__17123_17133 = G__17140;
i__17124_17134 = G__17141;
continue;
} else {
var temp__4657__auto___17142 = cljs.core.seq.call(null,seq__17121_17131);
if(temp__4657__auto___17142){
var seq__17121_17143__$1 = temp__4657__auto___17142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17121_17143__$1)){
var c__7604__auto___17144 = cljs.core.chunk_first.call(null,seq__17121_17143__$1);
var G__17145 = cljs.core.chunk_rest.call(null,seq__17121_17143__$1);
var G__17146 = c__7604__auto___17144;
var G__17147 = cljs.core.count.call(null,c__7604__auto___17144);
var G__17148 = (0);
seq__17121_17131 = G__17145;
chunk__17122_17132 = G__17146;
count__17123_17133 = G__17147;
i__17124_17134 = G__17148;
continue;
} else {
var vec__17128_17149 = cljs.core.first.call(null,seq__17121_17143__$1);
var ev__7943__auto___17150 = cljs.core.nth.call(null,vec__17128_17149,(0),null);
var func__7944__auto___17151 = cljs.core.nth.call(null,vec__17128_17149,(1),null);
lt.util.dom.on.call(null,e__7942__auto__,ev__7943__auto___17150,func__7944__auto___17151);

var G__17152 = cljs.core.next.call(null,seq__17121_17143__$1);
var G__17153 = null;
var G__17154 = (0);
var G__17155 = (0);
seq__17121_17131 = G__17152;
chunk__17122_17132 = G__17153;
count__17123_17133 = G__17154;
i__17124_17134 = G__17155;
continue;
}
} else {
}
}
break;
}

return e__7942__auto__;
});
lt.objs.find.current_ed = (function lt$objs$find$current_ed(){
return lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));
});
lt.objs.find.__GT_shown_width = (function lt$objs$find$__GT_shown_width(shown_QMARK_){
if(cljs.core.truth_(shown_QMARK_)){
return "";
} else {
return "0";
}
});
lt.objs.find.__GT_val = (function lt$objs$find$__GT_val(this$){
return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input.find","input.find",-1158996132),lt.object.__GT_content.call(null,this$)));
});
lt.objs.find.__GT_replacement = (function lt$objs$find$__GT_replacement(this$){
return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input.replace","input.replace",-2146729607),lt.object.__GT_content.call(null,this$)));
});
lt.objs.find.set_val = (function lt$objs$find$set_val(this$,v){
return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input.find","input.find",-1158996132),lt.object.__GT_content.call(null,this$)),v);
});
/**
 * 
 */
lt.objs.find.__BEH__show_BANG_ = (function lt$objs$find$__BEH__show_BANG_(this$){
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shown","shown",-1564457683),true,new cljs.core.Keyword(null,"pos","pos",-864607220),(function (){var temp__4657__auto__ = lt.objs.editor.pool.last_active.call(null);
if(cljs.core.truth_(temp__4657__auto__)){
var ed = temp__4657__auto__;
return lt.objs.editor.__GT_cursor.call(null,ed);
} else {
return null;
}
})()], null));
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.find","show!","lt.objs.find/show!",-1419144910),new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show!","show!",1939158011),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",490869788),lt.objs.find.__BEH__show_BANG_);
/**
 * 
 */
lt.objs.find.__BEH__hide_BANG_ = (function lt$objs$find$__BEH__hide_BANG_(this$){
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shown","shown",-1564457683),false], null));

var temp__4657__auto__ = lt.objs.editor.pool.last_active.call(null);
if(cljs.core.truth_(temp__4657__auto__)){
var ed = temp__4657__auto__;
return lt.objs.editor.focus.call(null,ed);
} else {
return null;
}
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.find","hide!","lt.objs.find/hide!",1313084424),new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide!","hide!",-2041470693),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",490869788),lt.objs.find.__BEH__hide_BANG_);
/**
 * 
 */
lt.objs.find.__BEH__next_BANG_ = (function lt$objs$find$__BEH__next_BANG_(this$){
var temp__4657__auto__ = lt.objs.editor.pool.last_active.call(null);
if(cljs.core.truth_(temp__4657__auto__)){
var cur = temp__4657__auto__;
if(cljs.core.truth_((function (){var and__6781__auto__ = new cljs.core.Keyword(null,"searching?","searching?",1889514722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));
if(cljs.core.truth_(and__6781__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"searching.for","searching.for",457460958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cur)),lt.objs.find.__GT_val.call(null,this$));
} else {
return and__6781__auto__;
}
})())){
return CodeMirror.commands.findNext(lt.objs.find.current_ed.call(null),new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else {
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"search!","search!",-612546952),lt.objs.find.__GT_val.call(null,this$));
}
} else {
return null;
}
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.find","next!","lt.objs.find/next!",-1033125148),new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next!","next!",977491453),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",490869788),lt.objs.find.__BEH__next_BANG_);
/**
 * 
 */
lt.objs.find.__BEH__prev_BANG_ = (function lt$objs$find$__BEH__prev_BANG_(this$){
var temp__4657__auto__ = lt.objs.editor.pool.last_active.call(null);
if(cljs.core.truth_(temp__4657__auto__)){
var cur = temp__4657__auto__;
if(cljs.core.truth_((function (){var and__6781__auto__ = new cljs.core.Keyword(null,"searching?","searching?",1889514722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));
if(cljs.core.truth_(and__6781__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"searching.for","searching.for",457460958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cur)),lt.objs.find.__GT_val.call(null,this$));
} else {
return and__6781__auto__;
}
})())){
return CodeMirror.commands.findPrev(lt.objs.find.current_ed.call(null),new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else {
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"search!","search!",-612546952),lt.objs.find.__GT_val.call(null,this$));
}
} else {
return null;
}
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.find","prev!","lt.objs.find/prev!",-188885655),new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prev!","prev!",-1927307736),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",490869788),lt.objs.find.__BEH__prev_BANG_);
/**
 * 
 */
lt.objs.find.__BEH__focus_BANG_ = (function lt$objs$find$__BEH__focus_BANG_(this$){
var input = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",556931961),lt.object.__GT_content.call(null,this$));
lt.util.dom.focus.call(null,input);

return input.select();
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.find","focus!","lt.objs.find/focus!",1205450056),new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus!","focus!",-1344984927),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",490869788),lt.objs.find.__BEH__focus_BANG_);
/**
 * 
 */
lt.objs.find.__BEH__clear_BANG_ = (function lt$objs$find$__BEH__clear_BANG_(this$){
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"searching?","searching?",1889514722),false], null));

var temp__4657__auto___17156 = lt.objs.editor.pool.last_active.call(null);
if(cljs.core.truth_(temp__4657__auto___17156)){
var ed_17157 = temp__4657__auto___17156;
CodeMirror.commands.clearSearch(lt.objs.editor.__GT_cm_ed.call(null,ed_17157));
} else {
}

var input = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",556931961),lt.object.__GT_content.call(null,this$));
if(cljs.core._EQ_.call(null,"",lt.util.dom.val.call(null,input))){
return lt.util.dom.val.call(null,input,"");
} else {
return null;
}
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.find","clear!","lt.objs.find/clear!",2137834387),new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear!","clear!",-144814418),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",490869788),lt.objs.find.__BEH__clear_BANG_);
/**
 * 
 */
lt.objs.find.__BEH__replace_BANG_ = (function lt$objs$find$__BEH__replace_BANG_(this$,all_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"searching?","searching?",1889514722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))){
} else {
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"search!","search!",-612546952),lt.objs.find.__GT_val.call(null,this$));
}

CodeMirror.commands.replace(lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)),lt.objs.find.__GT_replacement.call(null,this$),new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),cljs.core.boolean$.call(null,all_QMARK_));

return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"next!","next!",977491453));
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.find","replace!","lt.objs.find/replace!",1148591487),new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replace!","replace!",-1402959116),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",490869788),lt.objs.find.__BEH__replace_BANG_);
/**
 * 
 */
lt.objs.find.__BEH__search_BANG_ = (function lt$objs$find$__BEH__search_BANG_(this$,v){
if(cljs.core.empty_QMARK_.call(null,v)){
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear!","clear!",-144814418));
} else {
var temp__4657__auto__ = lt.objs.editor.pool.last_active.call(null);
if(cljs.core.truth_(temp__4657__auto__)){
var e = temp__4657__auto__;
var temp__4657__auto___17158__$1 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));
if(cljs.core.truth_(temp__4657__auto___17158__$1)){
var pos_17159 = temp__4657__auto___17158__$1;
lt.objs.editor.move_cursor.call(null,e,pos_17159);
} else {
}

lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"searching?","searching?",1889514722),true], null));

lt.object.merge_BANG_.call(null,e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"searching.for","searching.for",457460958),v], null));

var ed = lt.objs.editor.__GT_cm_ed.call(null,e);
return CodeMirror.commands.find(ed,v,new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else {
return null;
}
}
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.find","search!","lt.objs.find/search!",864801683),new cljs.core.Keyword(null,"debounce","debounce",-871550296),(50),new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search!","search!",-612546952),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",490869788),lt.objs.find.__BEH__search_BANG_);
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.find","find-bar","lt.objs.find/find-bar",-1422555012),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"find-bar","find-bar",-216460385),null], null), null),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"order","order",-1254677256),(-1),new cljs.core.Keyword(null,"searching?","searching?",1889514722),false,new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),false,new cljs.core.Keyword(null,"shown","shown",-1564457683),false,new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"init","init",-1875481434),(function (this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#find-bar","div#find-bar",726989857),lt.objs.find.input.call(null,this$),lt.objs.find.replace_input.call(null,this$),lt.objs.find.replace_all_button.call(null,this$)], null);
}));
/**
 * 
 */
lt.objs.find.__BEH__init = (function lt$objs$find$__BEH__init(this$){
lt.util.load.js.call(null,"core/node_modules/codemirror_addons/search.js",new cljs.core.Keyword(null,"sync","sync",-624148946));

return lt.util.load.js.call(null,"core/node_modules/codemirror/addon/search/searchcursor.js",new cljs.core.Keyword(null,"sync","sync",-624148946));
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.find","init","lt.objs.find/init",-133776513),new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",490869788),lt.objs.find.__BEH__init);
lt.objs.find.bar = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.find","find-bar","lt.objs.find/find-bar",-1422555012));
lt.objs.statusbar.add_container.call(null,lt.objs.find.bar);
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"find.show","find.show",-474555945),new cljs.core.Keyword(null,"desc","desc",2093485764),"Find: In current editor",new cljs.core.Keyword(null,"exec","exec",1625568743),(function (rev_QMARK_){
lt.object.merge_BANG_.call(null,lt.objs.find.bar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),rev_QMARK_], null));

lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"show!","show!",1939158011));

return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"focus!","focus!",-1344984927));
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"find.fill-selection","find.fill-selection",592236231),new cljs.core.Keyword(null,"desc","desc",2093485764),"Find: Fill with selection",new cljs.core.Keyword(null,"exec","exec",1625568743),(function (){
var temp__4657__auto__ = lt.objs.editor.pool.last_active.call(null);
if(cljs.core.truth_(temp__4657__auto__)){
var e = temp__4657__auto__;
var temp__4657__auto____$1 = lt.objs.editor.selection.call(null,e);
if(cljs.core.truth_(temp__4657__auto____$1)){
var sel = temp__4657__auto____$1;
if(cljs.core.empty_QMARK_.call(null,sel)){
return null;
} else {
return lt.objs.find.set_val.call(null,lt.objs.find.bar,sel);
}
} else {
return null;
}
} else {
return null;
}
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"find.clear","find.clear",447175852),new cljs.core.Keyword(null,"desc","desc",2093485764),"Find: Clear the find bar",new cljs.core.Keyword(null,"hidden","hidden",-312506092),true,new cljs.core.Keyword(null,"exec","exec",1625568743),(function (){
return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"clear!","clear!",-144814418));
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"find.hide","find.hide",1957786322),new cljs.core.Keyword(null,"desc","desc",2093485764),"Find: Hide the find bar",new cljs.core.Keyword(null,"exec","exec",1625568743),(function (){
return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"hide!","hide!",-2041470693));
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"find.next","find.next",1099984709),new cljs.core.Keyword(null,"desc","desc",2093485764),"Find: Next find result",new cljs.core.Keyword(null,"exec","exec",1625568743),(function (){
return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"next!","next!",977491453));
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"find.prev","find.prev",944985422),new cljs.core.Keyword(null,"desc","desc",2093485764),"Find: Previous find result",new cljs.core.Keyword(null,"exec","exec",1625568743),(function (){
return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"prev!","prev!",-1927307736));
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"find.replace","find.replace",1082766424),new cljs.core.Keyword(null,"desc","desc",2093485764),"Find: Replace current",new cljs.core.Keyword(null,"exec","exec",1625568743),(function (){
return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"replace!","replace!",-1402959116));
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"find.replace-all","find.replace-all",-388579908),new cljs.core.Keyword(null,"desc","desc",2093485764),"Find: Replace all occurrences",new cljs.core.Keyword(null,"exec","exec",1625568743),(function (){
return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"replace!","replace!",-1402959116),new cljs.core.Keyword(null,"all","all",892129742));
})], null));
lt.objs.find.line_input = lt.objs.sidebar.command.options_input.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"line number"], null));
/**
 * 
 */
lt.objs.find.__BEH__exec_active_BANG_ = (function lt$objs$find$__BEH__exec_active_BANG_(this$,l){
return lt.objs.sidebar.command.exec_active_BANG_.call(null,l);
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.find","exec-active!","lt.objs.find/exec-active!",1781402433),new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",1147833503),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",490869788),lt.objs.find.__BEH__exec_active_BANG_);
lt.object.add_behavior_BANG_.call(null,lt.objs.find.line_input,new cljs.core.Keyword("lt.objs.find","exec-active!","lt.objs.find/exec-active!",1781402433));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"go-to-line","go-to-line",-880192345),new cljs.core.Keyword(null,"desc","desc",2093485764),"Editor: Go to line",new cljs.core.Keyword(null,"options","options",99638489),lt.objs.find.line_input,new cljs.core.Keyword(null,"exec","exec",1625568743),(function (l){
if((typeof l === 'number') || (!(cljs.core.empty_QMARK_.call(null,l)))){
var cur = lt.objs.editor.pool.last_active.call(null);
lt.objs.editor.move_cursor.call(null,cur,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),(0),new cljs.core.Keyword(null,"line","line",212345235),(((!(typeof l === 'number'))?parseInt(l):l) - (1))], null));

return lt.objs.editor.center_cursor.call(null,cur);
} else {
return null;
}
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"find.toggle","find.toggle",1923384937),new cljs.core.Keyword(null,"desc","desc",2093485764),"Find: Toggle the find bar",new cljs.core.Keyword(null,"exec","exec",1625568743),(function (){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,lt.objs.find.bar),new cljs.core.Keyword(null,"shown","shown",-1564457683)))){
return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"find.hide","find.hide",1957786322));
} else {
return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"find.show","find.show",-474555945));
}
})], null));
