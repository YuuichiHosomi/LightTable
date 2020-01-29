// Compiled by ClojureScript 1.9.229 {}
goog.provide('lt.objs.cli');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.opener');
goog.require('lt.object');
goog.require('lt.objs.app');
goog.require('lt.objs.workspace');
goog.require('lt.objs.files');
goog.require('lt.util.ipc');
goog.require('clojure.string');
lt.objs.cli.remote = require("electron").remote;
lt.objs.cli.open_paths = (function lt$objs$cli$open_paths(path_line_pairs,add_QMARK_){
var seq__16545 = cljs.core.seq.call(null,path_line_pairs);
var chunk__16547 = null;
var count__16548 = (0);
var i__16549 = (0);
while(true){
if((i__16549 < count__16548)){
var vec__16551 = cljs.core._nth.call(null,chunk__16547,i__16549);
var path = cljs.core.nth.call(null,vec__16551,(0),null);
var line = cljs.core.nth.call(null,vec__16551,(1),null);
if(cljs.core.not_EQ_.call(null,path,process.execPath)){
if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,path))){
if(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,path))){
lt.object.raise.call(null,lt.objs.workspace.current_ws,new cljs.core.Keyword(null,"add.folder!","add.folder!",755480535),path);
} else {
lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open!","open!",1145596908),path);

if(cljs.core.truth_(line)){
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"go-to-line","go-to-line",-880192345),line);
} else {
}

if(cljs.core.truth_(add_QMARK_)){
lt.object.raise.call(null,lt.objs.workspace.current_ws,new cljs.core.Keyword(null,"add.file!","add.file!",-439765985),path);
} else {
}
}
} else {
lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"new!","new!",-1640547457),path);
}

var G__16557 = seq__16545;
var G__16558 = chunk__16547;
var G__16559 = count__16548;
var G__16560 = (i__16549 + (1));
seq__16545 = G__16557;
chunk__16547 = G__16558;
count__16548 = G__16559;
i__16549 = G__16560;
continue;
} else {
var G__16561 = seq__16545;
var G__16562 = chunk__16547;
var G__16563 = count__16548;
var G__16564 = (i__16549 + (1));
seq__16545 = G__16561;
chunk__16547 = G__16562;
count__16548 = G__16563;
i__16549 = G__16564;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16545);
if(temp__4657__auto__){
var seq__16545__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16545__$1)){
var c__7604__auto__ = cljs.core.chunk_first.call(null,seq__16545__$1);
var G__16565 = cljs.core.chunk_rest.call(null,seq__16545__$1);
var G__16566 = c__7604__auto__;
var G__16567 = cljs.core.count.call(null,c__7604__auto__);
var G__16568 = (0);
seq__16545 = G__16565;
chunk__16547 = G__16566;
count__16548 = G__16567;
i__16549 = G__16568;
continue;
} else {
var vec__16554 = cljs.core.first.call(null,seq__16545__$1);
var path = cljs.core.nth.call(null,vec__16554,(0),null);
var line = cljs.core.nth.call(null,vec__16554,(1),null);
if(cljs.core.not_EQ_.call(null,path,process.execPath)){
if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,path))){
if(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,path))){
lt.object.raise.call(null,lt.objs.workspace.current_ws,new cljs.core.Keyword(null,"add.folder!","add.folder!",755480535),path);
} else {
lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open!","open!",1145596908),path);

if(cljs.core.truth_(line)){
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"go-to-line","go-to-line",-880192345),line);
} else {
}

if(cljs.core.truth_(add_QMARK_)){
lt.object.raise.call(null,lt.objs.workspace.current_ws,new cljs.core.Keyword(null,"add.file!","add.file!",-439765985),path);
} else {
}
}
} else {
lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"new!","new!",-1640547457),path);
}

var G__16569 = cljs.core.next.call(null,seq__16545__$1);
var G__16570 = null;
var G__16571 = (0);
var G__16572 = (0);
seq__16545 = G__16569;
chunk__16547 = G__16570;
count__16548 = G__16571;
i__16549 = G__16572;
continue;
} else {
var G__16573 = cljs.core.next.call(null,seq__16545__$1);
var G__16574 = null;
var G__16575 = (0);
var G__16576 = (0);
seq__16545 = G__16573;
chunk__16547 = G__16574;
count__16548 = G__16575;
i__16549 = G__16576;
continue;
}
}
} else {
return null;
}
}
break;
}
});
/**
 * Map of commandline options parsed by yargs
 */
lt.objs.cli.parsed_args = cljs.core.js__GT_clj.call(null,lt.objs.cli.remote.getGlobal("browserParsedArgs"),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
/**
 * Files to open from a file manager
 */
lt.objs.cli.open_files = cljs.core.js__GT_clj.call(null,lt.objs.cli.remote.getGlobal("browserOpenFiles"));
/**
 * Arguments used to start LightTable
 */
lt.objs.cli.argv = cljs.core.js__GT_clj.call(null,lt.objs.cli.remote.process.argv);
lt.util.ipc.on.call(null,"openFileAfterStartup",(function (p1__16577_SHARP_){
return lt.object.raise.call(null,lt.objs.app.app,new cljs.core.Keyword(null,"open!","open!",1145596908),p1__16577_SHARP_);
}));
/**
 * Returns path arguments passed to executable or nil if none given. Only returns
 *   on first window since subsequent windows don't open path arguments.
 */
lt.objs.cli.args = (function lt$objs$cli$args(){
var and__6781__auto__ = lt.objs.app.first_window_QMARK_.call(null);
if(cljs.core.truth_(and__6781__auto__)){
return (cljs.core.seq.call(null,lt.objs.cli.open_files)) || (cljs.core.seq.call(null,(cljs.core.truth_(process.env.LT_DEV_CLI)?cljs.core.subvec.call(null,lt.objs.cli.argv,(2)):cljs.core.rest.call(null,lt.objs.cli.argv))));
} else {
return and__6781__auto__;
}
});
/**
 * 
 */
lt.objs.cli.__BEH__open_on_args = (function lt$objs$cli$__BEH__open_on_args(this$){
if(cljs.core.truth_(lt.objs.app.first_window_QMARK_.call(null))){
var path_line_pairs = cljs.core.map.call(null,(function (p1__16578_SHARP_){
var vec__16582 = cljs.core.re_find.call(null,/^(.*?):?(\d+)?$/,p1__16578_SHARP_);
var _ = cljs.core.nth.call(null,vec__16582,(0),null);
var path = cljs.core.nth.call(null,vec__16582,(1),null);
var line = cljs.core.nth.call(null,vec__16582,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.resolve.call(null,lt.objs.files.cwd,path),line], null);
}),lt.objs.cli.args.call(null));
var paths = cljs.core.map.call(null,cljs.core.first,path_line_pairs);
var open_dir_QMARK_ = cljs.core.some.call(null,lt.objs.files.dir_QMARK_,paths);
if(cljs.core.truth_(open_dir_QMARK_)){
lt.object.merge_BANG_.call(null,lt.objs.workspace.current_ws,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialized?","initialized?",1707939066),true], null));

lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"workspace.show","workspace.show",-1449362332));
} else {
}

return lt.objs.cli.open_paths.call(null,path_line_pairs,new cljs.core.Keyword(null,"add","add",235287739).cljs$core$IFn$_invoke$arity$1(lt.objs.cli.parsed_args));
} else {
return null;
}
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.cli","open-on-args","lt.objs.cli/open-on-args",-1043868468),new cljs.core.Keyword(null,"desc","desc",2093485764),"App: Process commandline or file manager arguments",new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-init","post-init",1539646468),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",490869788),lt.objs.cli.__BEH__open_on_args);
/**
 * 
 */
lt.objs.cli.__BEH__open_BANG_ = (function lt$objs$cli$__BEH__open_BANG_(this$,path){
if(cljs.core._EQ_.call(null,lt.objs.app.fetch.call(null,new cljs.core.Keyword(null,"focusedWindow","focusedWindow",-121610640)),lt.objs.app.window_number.call(null))){
return lt.objs.cli.open_paths.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null)], null),new cljs.core.Keyword(null,"add","add",235287739).cljs$core$IFn$_invoke$arity$1(lt.objs.cli.parsed_args));
} else {
return null;
}
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.cli","open!","lt.objs.cli/open!",690477088),new cljs.core.Keyword(null,"desc","desc",2093485764),"App: Open path(s) from a file manager after startup",new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open!","open!",1145596908),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",490869788),lt.objs.cli.__BEH__open_BANG_);
