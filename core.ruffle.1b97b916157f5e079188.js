"use strict";(self.webpackChunkruffle_selfhosted=self.webpackChunkruffle_selfhosted||[]).push([[662],{762:(n,e,t)=>{function _(n,e,t){e&&n.getChannelData(0).set(e),t&&n.getChannelData(1).set(t)}function r(n){return n.currentTime-n.baseLatency}t.d(e,{K:()=>_,T:()=>r})},662:(n,e,t)=>{t.r(e),t.d(e,{Ruffle:()=>j,default:()=>N,initSync:()=>G});var _=t(762);n=t.hmd(n);const r="undefined"!=typeof AudioContext?AudioContext:"undefined"!=typeof webkitAudioContext?webkitAudioContext:void 0;let b;const c=new Array(32).fill(void 0);function o(n){return c[n]}c.push(void 0,null,!0,!1);let f=c.length;function u(n){const e=o(n);return function(n){n<36||(c[n]=f,f=n)}(n),e}function i(n){f===c.length&&c.push(c.length+1);const e=f;return f=c[e],c[e]=n,e}const a=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});let g;function w(){return 0===g.byteLength&&(g=new Uint8Array(b.memory.buffer)),g}function d(n,e){return a.decode(w().subarray(n,n+e))}a.decode();let s=0;const l=new TextEncoder("utf-8"),m="function"==typeof l.encodeInto?function(n,e){return l.encodeInto(n,e)}:function(n,e){const t=l.encode(n);return e.set(t),{read:n.length,written:t.length}};function p(n,e,t){if(void 0===t){const t=l.encode(n),_=e(t.length);return w().subarray(_,_+t.length).set(t),s=t.length,_}let _=n.length,r=e(_);const b=w();let c=0;for(;c<_;c++){const e=n.charCodeAt(c);if(e>127)break;b[r+c]=e}if(c!==_){0!==c&&(n=n.slice(c)),r=t(r,_,_=c+3*n.length);const e=w().subarray(r+c,r+_);c+=m(n,e).written}return s=c,r}let y,h;function v(){return 0===y.byteLength&&(y=new Int32Array(b.memory.buffer)),y}function A(n){return null==n}function x(){return 0===h.byteLength&&(h=new Float64Array(b.memory.buffer)),h}function S(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let t="[";e>0&&(t+=S(n[0]));for(let _=1;_<e;_++)t+=", "+S(n[_]);return t+="]",t}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let _;if(!(t.length>1))return toString.call(n);if(_=t[1],"Object"==_)try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:_}function C(n,e,t,_){const r={a:n,b:e,cnt:1,dtor:t},c=(...n)=>{r.cnt++;const e=r.a;r.a=0;try{return _(e,r.b,...n)}finally{0==--r.cnt?b.__wbindgen_export_2.get(r.dtor)(e,r.b):r.a=e}};return c.original=r,c}function T(n,e,t){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1be71c62ecf293e4(n,e,i(t))}function R(n,e,t){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hbc48e3d19b4f5fb7(n,e,t)}function E(n,e){b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf6a24e5133b1b3fc(n,e)}function k(n,e,t){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9615cf94f2a27930(n,e,i(t))}function P(n,e){try{return n.apply(this,e)}catch(n){b.__wbindgen_exn_store(i(n))}}let F,L,M,O=32;function D(n){if(1==O)throw new Error("out of js stack");return c[--O]=n,O}function I(n,e){return(0===L.byteLength&&(L=new Float32Array(b.memory.buffer)),L).subarray(n/4,n/4+e)}function W(n,e){return w().subarray(n/1,n/1+e)}function B(n,e){return x().subarray(n/8,n/8+e)}function U(n,e){return(0===M.byteLength&&(M=new Uint8ClampedArray(b.memory.buffer)),M).subarray(n/1,n/1+e)}class j{static __wrap(n){const e=Object.create(j.prototype);return e.ptr=n,e}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();b.__wbg_ruffle_free(n)}constructor(n,e,t){try{return u(b.ruffle_new(i(n),i(e),D(t)))}finally{c[O++]=void 0}}stream_from(n,e){try{const _=b.__wbindgen_add_to_stack_pointer(-16),r=p(n,b.__wbindgen_malloc,b.__wbindgen_realloc),o=s;b.ruffle_stream_from(_,this.ptr,r,o,D(e));var t=v()[_/4+0];if(v()[_/4+1])throw u(t)}finally{b.__wbindgen_add_to_stack_pointer(16),c[O++]=void 0}}load_data(n,e){try{const _=b.__wbindgen_add_to_stack_pointer(-16);b.ruffle_load_data(_,this.ptr,i(n),D(e));var t=v()[_/4+0];if(v()[_/4+1])throw u(t)}finally{b.__wbindgen_add_to_stack_pointer(16),c[O++]=void 0}}play(){b.ruffle_play(this.ptr)}pause(){b.ruffle_pause(this.ptr)}is_playing(){return 0!==b.ruffle_is_playing(this.ptr)}prepare_context_menu(){return u(b.ruffle_prepare_context_menu(this.ptr))}run_context_menu_callback(n){b.ruffle_run_context_menu_callback(this.ptr,n)}set_fullscreen(n){b.ruffle_set_fullscreen(this.ptr,n)}clear_custom_menu_items(){b.ruffle_clear_custom_menu_items(this.ptr)}destroy(){b.ruffle_destroy(this.ptr)}call_exposed_callback(n,e){const t=p(n,b.__wbindgen_malloc,b.__wbindgen_realloc),_=s,r=function(n,e){const t=e(4*n.length),_=(0===F.byteLength&&(F=new Uint32Array(b.memory.buffer)),F);for(let e=0;e<n.length;e++)_[t/4+e]=i(n[e]);return s=n.length,t}(e,b.__wbindgen_malloc),c=s;return u(b.ruffle_call_exposed_callback(this.ptr,t,_,r,c))}set_trace_observer(n){b.ruffle_set_trace_observer(this.ptr,i(n))}audio_context(){return u(b.ruffle_audio_context(this.ptr))}static is_wasm_simd_used(){return 0!==b.ruffle_is_wasm_simd_used()}}function V(){const e={wbg:{}};return e.wbg.__wbindgen_object_drop_ref=function(n){u(n)},e.wbg.__wbindgen_object_clone_ref=function(n){return i(o(n))},e.wbg.__wbindgen_cb_drop=function(n){const e=u(n).original;return 1==e.cnt--&&(e.a=0,!0)},e.wbg.__wbindgen_string_new=function(n,e){return i(d(n,e))},e.wbg.__wbg_ruffle_new=function(n){return i(j.__wrap(n))},e.wbg.__wbindgen_is_function=function(n){return"function"==typeof o(n)},e.wbg.__wbindgen_json_parse=function(n,e){return i(JSON.parse(d(n,e)))},e.wbg.__wbindgen_json_serialize=function(n,e){const t=o(e),_=p(JSON.stringify(void 0===t?null:t),b.__wbindgen_malloc,b.__wbindgen_realloc),r=s;v()[n/4+1]=r,v()[n/4+0]=_},e.wbg.__wbg_new_df6e6ab7a65c4c4d=function(n,e){return i(new Error(d(n,e)))},e.wbg.__wbg_panic_bbc809dd04a12c60=function(n,e){o(n).panic(o(e))},e.wbg.__wbg_setFullscreen_9819a8b20564e39b=function(){return P((function(n,e){o(n).setFullscreen(0!==e)}),arguments)},e.wbg.__wbindgen_string_get=function(n,e){const t=o(e),_="string"==typeof t?t:void 0;var r=A(_)?0:p(_,b.__wbindgen_malloc,b.__wbindgen_realloc),c=s;v()[n/4+1]=c,v()[n/4+0]=r},e.wbg.__wbg_displayUnsupportedMessage_a8f81a8e054e5e91=function(n){o(n).displayUnsupportedMessage()},e.wbg.__wbg_displayRootMovieDownloadFailedMessage_1a5c34096259685a=function(n){o(n).displayRootMovieDownloadFailedMessage()},e.wbg.__wbg_displayMessage_c57c20204892da2b=function(n,e,t){o(n).displayMessage(d(e,t))},e.wbg.__wbg_setMetadata_bbaeaee7f48274e6=function(n,e){o(n).setMetadata(u(e))},e.wbg.__wbg_onCallbackAvailable_3a48fae397926c96=function(n,e,t){o(n).onCallbackAvailable(d(e,t))},e.wbg.__wbg_onFSCommand_fb2f94653f71796e=function(){return P((function(n,e,t,_,r){return o(n).onFSCommand(d(e,t),d(_,r))}),arguments)},e.wbg.__wbindgen_number_get=function(n,e){const t=o(e),_="number"==typeof t?t:void 0;x()[n/8+1]=A(_)?0:_,v()[n/4+0]=!A(_)},e.wbg.__wbindgen_boolean_get=function(n){const e=o(n);return"boolean"==typeof e?e?1:0:2},e.wbg.__wbindgen_number_new=function(n){return i(n)},e.wbg.__wbg_copyToAudioBuffer_58f244be94bac1d2=function(n,e,t,r,b){(0,_.K)(o(n),0===e?void 0:I(e,t),0===r?void 0:I(r,b))},e.wbg.__wbg_getAudioOutputTimestamp_a67aa6687740cd15=function(n){return(0,_.T)(o(n))},e.wbg.__wbg_new_693216e109162396=function(){return i(new Error)},e.wbg.__wbg_stack_0ddaca5d1abfb52f=function(n,e){const t=p(o(e).stack,b.__wbindgen_malloc,b.__wbindgen_realloc),_=s;v()[n/4+1]=_,v()[n/4+0]=t},e.wbg.__wbg_error_09919627ac0992f5=function(n,e){try{console.error(d(n,e))}finally{b.__wbindgen_free(n,e)}},e.wbg.__wbindgen_is_undefined=function(n){return void 0===o(n)},e.wbg.__wbg_randomFillSync_91e2b39becca6147=function(){return P((function(n,e,t){o(n).randomFillSync(W(e,t))}),arguments)},e.wbg.__wbg_getRandomValues_b14734aa289bc356=function(){return P((function(n,e){o(n).getRandomValues(o(e))}),arguments)},e.wbg.__wbg_process_e56fd54cf6319b6c=function(n){return i(o(n).process)},e.wbg.__wbindgen_is_object=function(n){const e=o(n);return"object"==typeof e&&null!==e},e.wbg.__wbg_versions_77e21455908dad33=function(n){return i(o(n).versions)},e.wbg.__wbg_node_0dd25d832e4785d5=function(n){return i(o(n).node)},e.wbg.__wbindgen_is_string=function(n){return"string"==typeof o(n)},e.wbg.__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd=function(){return i(n)},e.wbg.__wbg_require_0db1598d9ccecb30=function(){return P((function(n,e,t){return i(o(n).require(d(e,t)))}),arguments)},e.wbg.__wbg_crypto_b95d7173266618a9=function(n){return i(o(n).crypto)},e.wbg.__wbg_msCrypto_5a86d77a66230f81=function(n){return i(o(n).msCrypto)},e.wbg.__wbg_instanceof_WebGl2RenderingContext_f43c52e5e19f2606=function(n){return o(n)instanceof WebGL2RenderingContext},e.wbg.__wbg_bindVertexArray_93c9ea4c521c6150=function(n,e){o(n).bindVertexArray(o(e))},e.wbg.__wbg_blitFramebuffer_6d99f41ef1c9032f=function(n,e,t,_,r,b,c,f,u,i,a){o(n).blitFramebuffer(e,t,_,r,b,c,f,u,i>>>0,a>>>0)},e.wbg.__wbg_createVertexArray_f8aff8c98a8e7ce7=function(n){const e=o(n).createVertexArray();return A(e)?0:i(e)},e.wbg.__wbg_renderbufferStorageMultisample_2fddc7b0cc405fe4=function(n,e,t,_,r,b){o(n).renderbufferStorageMultisample(e>>>0,t,_>>>0,r,b)},e.wbg.__wbg_texImage2D_e7d46024e2946907=function(){return P((function(n,e,t,_,r,b,c,f,u,i,a){o(n).texImage2D(e>>>0,t,_,r,b,c,f>>>0,u>>>0,0===i?void 0:W(i,a))}),arguments)},e.wbg.__wbg_bindFramebuffer_8fa07aa65dcbd3aa=function(n,e,t){o(n).bindFramebuffer(e>>>0,o(t))},e.wbg.__wbg_bindRenderbuffer_8969ae2581d424bd=function(n,e,t){o(n).bindRenderbuffer(e>>>0,o(t))},e.wbg.__wbg_bindTexture_83f436ae22ba78b4=function(n,e,t){o(n).bindTexture(e>>>0,o(t))},e.wbg.__wbg_createFramebuffer_1316a4c02803bcf8=function(n){const e=o(n).createFramebuffer();return A(e)?0:i(e)},e.wbg.__wbg_createRenderbuffer_abb5d5ff42fa138f=function(n){const e=o(n).createRenderbuffer();return A(e)?0:i(e)},e.wbg.__wbg_createTexture_1b5ac8ef80f089c8=function(n){const e=o(n).createTexture();return A(e)?0:i(e)},e.wbg.__wbg_deleteFramebuffer_48183bac844e2cbe=function(n,e){o(n).deleteFramebuffer(o(e))},e.wbg.__wbg_deleteRenderbuffer_92abd3c5070fbbb9=function(n,e){o(n).deleteRenderbuffer(o(e))},e.wbg.__wbg_deleteTexture_8cb16fb3b8ab69cd=function(n,e){o(n).deleteTexture(o(e))},e.wbg.__wbg_framebufferRenderbuffer_4e682abcb3678a20=function(n,e,t,_,r){o(n).framebufferRenderbuffer(e>>>0,t>>>0,_>>>0,o(r))},e.wbg.__wbg_framebufferTexture2D_fd6329e64dacca57=function(n,e,t,_,r,b){o(n).framebufferTexture2D(e>>>0,t>>>0,_>>>0,o(r),b)},e.wbg.__wbg_getError_2d3fe8b71c072eda=function(n){return o(n).getError()},e.wbg.__wbg_getParameter_00d59df03350c8de=function(){return P((function(n,e){return i(o(n).getParameter(e>>>0))}),arguments)},e.wbg.__wbg_texParameteri_d3d72cea09b18227=function(n,e,t,_){o(n).texParameteri(e>>>0,t>>>0,_)},e.wbg.__wbg_instanceof_Window_a2a08d3918d7d4d0=function(n){return o(n)instanceof Window},e.wbg.__wbg_document_14a383364c173445=function(n){const e=o(n).document;return A(e)?0:i(e)},e.wbg.__wbg_location_3b5031b281e8d218=function(n){return i(o(n).location)},e.wbg.__wbg_devicePixelRatio_85ae9a993f96e777=function(n){return o(n).devicePixelRatio},e.wbg.__wbg_localStorage_2409bbdfe5a4d2a7=function(){return P((function(n){const e=o(n).localStorage;return A(e)?0:i(e)}),arguments)},e.wbg.__wbg_cancelAnimationFrame_0751dd622bd4f521=function(){return P((function(n,e){o(n).cancelAnimationFrame(e)}),arguments)},e.wbg.__wbg_focus_9b223127d6e50a79=function(){return P((function(n){o(n).focus()}),arguments)},e.wbg.__wbg_open_ab0998e8eb242a30=function(){return P((function(n,e,t,_,r){const b=o(n).open(d(e,t),d(_,r));return A(b)?0:i(b)}),arguments)},e.wbg.__wbg_requestAnimationFrame_61bcf77211b282b7=function(){return P((function(n,e){return o(n).requestAnimationFrame(o(e))}),arguments)},e.wbg.__wbg_fetch_23507368eed8d838=function(n,e){return i(o(n).fetch(o(e)))},e.wbg.__wbg_setProperty_88447bf87ac638d7=function(){return P((function(n,e,t,_,r){o(n).setProperty(d(e,t),d(_,r))}),arguments)},e.wbg.__wbg_inverse_b39ac63238937fb8=function(n){return i(o(n).inverse())},e.wbg.__wbg_protocol_7652393e06791937=function(){return P((function(n,e){const t=p(o(e).protocol,b.__wbindgen_malloc,b.__wbindgen_realloc),_=s;v()[n/4+1]=_,v()[n/4+0]=t}),arguments)},e.wbg.__wbg_assign_4726eabf9448fa32=function(){return P((function(n,e,t){o(n).assign(d(e,t))}),arguments)},e.wbg.__wbg_get_9ef6317e05999b24=function(){return P((function(n,e,t,_){const r=o(e)[d(t,_)];var c=A(r)?0:p(r,b.__wbindgen_malloc,b.__wbindgen_realloc),f=s;v()[n/4+1]=f,v()[n/4+0]=c}),arguments)},e.wbg.__wbg_set_d76080869c49dd27=function(){return P((function(n,e,t,_,r){o(n)[d(e,t)]=d(_,r)}),arguments)},e.wbg.__wbg_delete_27f2e31e06970b8b=function(){return P((function(n,e,t){delete o(n)[d(e,t)]}),arguments)},e.wbg.__wbg_length_9d65dcca5722c005=function(n){return o(n).length},e.wbg.__wbg_offsetX_20394816af6b15d9=function(n){return o(n).offsetX},e.wbg.__wbg_offsetY_23315c976b0ac2ae=function(n){return o(n).offsetY},e.wbg.__wbg_button_943ba4d0c28109da=function(n){return o(n).button},e.wbg.__wbg_new_e2a145651668d22b=function(){return P((function(){return i(new Path2D)}),arguments)},e.wbg.__wbg_addPath_e0df7c5ccdae8168=function(n,e,t){o(n).addPath(o(e),o(t))},e.wbg.__wbg_closePath_dcda5ae9e0db0d5e=function(n){o(n).closePath()},e.wbg.__wbg_lineTo_22b9d8be98d56182=function(n,e,t){o(n).lineTo(e,t)},e.wbg.__wbg_moveTo_7f059fbc0c6c8424=function(n,e,t){o(n).moveTo(e,t)},e.wbg.__wbg_quadraticCurveTo_d8cbb5d19125b688=function(n,e,t,_,r){o(n).quadraticCurveTo(e,t,_,r)},e.wbg.__wbg_rect_818027622ba9aa48=function(n,e,t,_,r){o(n).rect(e,t,_,r)},e.wbg.__wbg_connect_633555bc7344598d=function(){return P((function(n,e){return i(o(n).connect(o(e)))}),arguments)},e.wbg.__wbg_connect_4c80dae70fa5fe0e=function(){return P((function(n,e,t){return i(o(n).connect(o(e),t>>>0))}),arguments)},e.wbg.__wbg_connect_ce3408cd4c9bfb5b=function(){return P((function(n,e,t,_){return i(o(n).connect(o(e),t>>>0,_>>>0))}),arguments)},e.wbg.__wbg_disconnect_64bab0efac0feedc=function(){return P((function(n){o(n).disconnect()}),arguments)},e.wbg.__wbg_outputBuffer_8dae99e0e482f27f=function(){return P((function(n){return i(o(n).outputBuffer)}),arguments)},e.wbg.__wbg_bindVertexArrayOES_b53b8137f0e6f9e1=function(n,e){o(n).bindVertexArrayOES(o(e))},e.wbg.__wbg_createVertexArrayOES_56337c7d4798d96b=function(n){const e=o(n).createVertexArrayOES();return A(e)?0:i(e)},e.wbg.__wbg_instanceof_Response_e928c54c1025470c=function(n){return o(n)instanceof Response},e.wbg.__wbg_url_0f82030e7245954c=function(n,e){const t=p(o(e).url,b.__wbindgen_malloc,b.__wbindgen_realloc),_=s;v()[n/4+1]=_,v()[n/4+0]=t},e.wbg.__wbg_ok_2e44e661aa8fedb0=function(n){return o(n).ok},e.wbg.__wbg_statusText_9b7d7bb057846e45=function(n,e){const t=p(o(e).statusText,b.__wbindgen_malloc,b.__wbindgen_realloc),_=s;v()[n/4+1]=_,v()[n/4+0]=t},e.wbg.__wbg_arrayBuffer_9c26a73988618f92=function(){return P((function(n){return i(o(n).arrayBuffer())}),arguments)},e.wbg.__wbg_deltaY_e3158374108000c8=function(n){return o(n).deltaY},e.wbg.__wbg_deltaMode_78fa2eac67504e1e=function(n){return o(n).deltaMode},e.wbg.__wbg_setbuffer_268b8e029383d924=function(n,e){o(n).buffer=o(e)},e.wbg.__wbg_setloop_8beb0773eae76401=function(n,e){o(n).loop=0!==e},e.wbg.__wbg_setloopStart_5f495fec439919e6=function(n,e){o(n).loopStart=e},e.wbg.__wbg_setloopEnd_6bf41e720185a5e7=function(n,e){o(n).loopEnd=e},e.wbg.__wbg_setonended_519c00ee657450cf=function(n,e){o(n).onended=o(e)},e.wbg.__wbg_start_27104226d655d8de=function(){return P((function(n){o(n).start()}),arguments)},e.wbg.__wbg_start_b6c96a33c07e1024=function(){return P((function(n,e,t){o(n).start(e,t)}),arguments)},e.wbg.__wbg_stop_7d244676b8fec148=function(){return P((function(n,e){o(n).stop(e)}),arguments)},e.wbg.__wbg_setTransform_2c1f1d5821ce9694=function(n,e){o(n).setTransform(o(e))},e.wbg.__wbg_instanceof_HtmlFormElement_7e3c5f7169b9ec9c=function(n){return o(n)instanceof HTMLFormElement},e.wbg.__wbg_submit_ae549d5b993be5ce=function(){return P((function(n){o(n).submit()}),arguments)},e.wbg.__wbg_now_9c64828adecad05e=function(n){return o(n).now()},e.wbg.__wbg_pointerId_3517dc72b60101cb=function(n){return o(n).pointerId},e.wbg.__wbg_a_f8a23157db40a300=function(n){return o(n).a},e.wbg.__wbg_seta_5cd98d661ce16283=function(n,e){o(n).a=e},e.wbg.__wbg_b_0d5d58541358976b=function(n){return o(n).b},e.wbg.__wbg_c_a90f0b5bdc175e78=function(n){return o(n).c},e.wbg.__wbg_d_e464989627f07979=function(n){return o(n).d},e.wbg.__wbg_setd_8a679c3670b6f49b=function(n,e){o(n).d=e},e.wbg.__wbg_e_9f858429eb0a621e=function(n){return o(n).e},e.wbg.__wbg_f_c5253bae312ccc71=function(n){return o(n).f},e.wbg.__wbg_new_adbe707b014d1fd2=function(){return P((function(){return i(new DOMMatrix)}),arguments)},e.wbg.__wbg_newwitharray64_e834f62cea0c8cc5=function(){return P((function(n,e){return i(new DOMMatrix(B(n,e)))}),arguments)},e.wbg.__wbg_currentTarget_6f25dd2ce13178de=function(n){const e=o(n).currentTarget;return A(e)?0:i(e)},e.wbg.__wbg_preventDefault_2e92eb64f38efc0d=function(n){o(n).preventDefault()},e.wbg.__wbg_instanceof_HtmlCanvasElement_7b561bd94e483f1d=function(n){return o(n)instanceof HTMLCanvasElement},e.wbg.__wbg_width_ad2acb326fc35bdb=function(n){return o(n).width},e.wbg.__wbg_setwidth_59ddc312219f205b=function(n,e){o(n).width=e>>>0},e.wbg.__wbg_height_65ee0c47b0a97297=function(n){return o(n).height},e.wbg.__wbg_setheight_70833966b4ed584e=function(n,e){o(n).height=e>>>0},e.wbg.__wbg_getContext_b506f48cb166bf26=function(){return P((function(n,e,t){const _=o(n).getContext(d(e,t));return A(_)?0:i(_)}),arguments)},e.wbg.__wbg_getContext_686f3aabd97ba151=function(){return P((function(n,e,t,_){const r=o(n).getContext(d(e,t),o(_));return A(r)?0:i(r)}),arguments)},e.wbg.__wbg_key_6e807abe0dbacdb8=function(n,e){const t=p(o(e).key,b.__wbindgen_malloc,b.__wbindgen_realloc),_=s;v()[n/4+1]=_,v()[n/4+0]=t},e.wbg.__wbg_code_ec695f278753de4d=function(n,e){const t=p(o(e).code,b.__wbindgen_malloc,b.__wbindgen_realloc),_=s;v()[n/4+1]=_,v()[n/4+0]=t},e.wbg.__wbg_newwithstrandinit_41c86e821f771b24=function(){return P((function(n,e,t){return i(new Request(d(n,e),o(t)))}),arguments)},e.wbg.__wbg_setonaudioprocess_0f18f08566d678e6=function(n,e){o(n).onaudioprocess=o(e)},e.wbg.__wbg_body_36a11f2467926b2b=function(n){const e=o(n).body;return A(e)?0:i(e)},e.wbg.__wbg_createElement_2d8b75cffbd32c70=function(){return P((function(n,e,t){return i(o(n).createElement(d(e,t)))}),arguments)},e.wbg.__wbg_createElementNS_02b4562aadf76190=function(){return P((function(n,e,t,_,r){return i(o(n).createElementNS(0===e?void 0:d(e,t),d(_,r)))}),arguments)},e.wbg.__wbg_setid_c3cb9fedad5d2791=function(n,e,t){o(n).id=d(e,t)},e.wbg.__wbg_clientWidth_ff949ad9c6d41cd2=function(n){return o(n).clientWidth},e.wbg.__wbg_clientHeight_a250dcf2e0afa47a=function(n){return o(n).clientHeight},e.wbg.__wbg_querySelector_a38de55d3f2e4d6b=function(){return P((function(n,e,t){const _=o(n).querySelector(d(e,t));return A(_)?0:i(_)}),arguments)},e.wbg.__wbg_releasePointerCapture_13317581046e37c3=function(){return P((function(n,e){o(n).releasePointerCapture(e)}),arguments)},e.wbg.__wbg_setAttribute_6091f6f3602fc299=function(){return P((function(n,e,t,_,r){o(n).setAttribute(d(e,t),d(_,r))}),arguments)},e.wbg.__wbg_setAttributeNS_3139623dfaef606b=function(){return P((function(n,e,t,_,r,b,c){o(n).setAttributeNS(0===e?void 0:d(e,t),d(_,r),d(b,c))}),arguments)},e.wbg.__wbg_setPointerCapture_dee49a07994f6e33=function(){return P((function(n,e){o(n).setPointerCapture(e)}),arguments)},e.wbg.__wbg_remove_c64fe8f390b51079=function(n){o(n).remove()},e.wbg.__wbg_instanceof_WebGlRenderingContext_79048c0314cf40c7=function(n){return o(n)instanceof WebGLRenderingContext},e.wbg.__wbg_drawingBufferWidth_2a4ec0e9cfd1165f=function(n){return o(n).drawingBufferWidth},e.wbg.__wbg_drawingBufferHeight_64a411586cabb96c=function(n){return o(n).drawingBufferHeight},e.wbg.__wbg_bufferData_1ca9a3b086d4f813=function(n,e,t,_,r){o(n).bufferData(e>>>0,W(t,_),r>>>0)},e.wbg.__wbg_texImage2D_e8ea990c77c01b05=function(){return P((function(n,e,t,_,r,b,c,f,u,i,a){o(n).texImage2D(e>>>0,t,_,r,b,c,f>>>0,u>>>0,0===i?void 0:W(i,a))}),arguments)},e.wbg.__wbg_uniform1fv_ffdaf3c465cd6435=function(n,e,t,_){o(n).uniform1fv(o(e),I(t,_))},e.wbg.__wbg_uniform4fv_f6890ad8a7ff6086=function(n,e,t,_){o(n).uniform4fv(o(e),I(t,_))},e.wbg.__wbg_uniformMatrix3fv_7969af8b5719ac05=function(n,e,t,_,r){o(n).uniformMatrix3fv(o(e),0!==t,I(_,r))},e.wbg.__wbg_uniformMatrix4fv_350ada82fee5cc68=function(n,e,t,_,r){o(n).uniformMatrix4fv(o(e),0!==t,I(_,r))},e.wbg.__wbg_activeTexture_c32bcd0a63a09c15=function(n,e){o(n).activeTexture(e>>>0)},e.wbg.__wbg_attachShader_772486952587993d=function(n,e,t){o(n).attachShader(o(e),o(t))},e.wbg.__wbg_bindBuffer_6cd1a268e0421a46=function(n,e,t){o(n).bindBuffer(e>>>0,o(t))},e.wbg.__wbg_bindFramebuffer_934b8eade9d43fe0=function(n,e,t){o(n).bindFramebuffer(e>>>0,o(t))},e.wbg.__wbg_bindRenderbuffer_e5cd7424d91a17d5=function(n,e,t){o(n).bindRenderbuffer(e>>>0,o(t))},e.wbg.__wbg_bindTexture_b3162b3f55caf7eb=function(n,e,t){o(n).bindTexture(e>>>0,o(t))},e.wbg.__wbg_blendFunc_79931040c21a5c70=function(n,e,t){o(n).blendFunc(e>>>0,t>>>0)},e.wbg.__wbg_clear_fe06235bcda1a904=function(n,e){o(n).clear(e>>>0)},e.wbg.__wbg_clearColor_53d69d875a21f3f3=function(n,e,t,_,r){o(n).clearColor(e,t,_,r)},e.wbg.__wbg_colorMask_efa17a5ffd9cd3fc=function(n,e,t,_,r){o(n).colorMask(0!==e,0!==t,0!==_,0!==r)},e.wbg.__wbg_compileShader_4b64c51ce6f0d0be=function(n,e){o(n).compileShader(o(e))},e.wbg.__wbg_createBuffer_ae5a57822b3d261c=function(n){const e=o(n).createBuffer();return A(e)?0:i(e)},e.wbg.__wbg_createProgram_97d3ab796f2e4f2a=function(n){const e=o(n).createProgram();return A(e)?0:i(e)},e.wbg.__wbg_createShader_47c8c7b5a08a528d=function(n,e){const t=o(n).createShader(e>>>0);return A(t)?0:i(t)},e.wbg.__wbg_createTexture_ce8ff62039834d9c=function(n){const e=o(n).createTexture();return A(e)?0:i(e)},e.wbg.__wbg_disable_5d988b6430f67f00=function(n,e){o(n).disable(e>>>0)},e.wbg.__wbg_disableVertexAttribArray_37add1973be851f6=function(n,e){o(n).disableVertexAttribArray(e>>>0)},e.wbg.__wbg_drawElements_c18d01e29e69ee7f=function(n,e,t,_,r){o(n).drawElements(e>>>0,t,_>>>0,r)},e.wbg.__wbg_enable_74fb1401e1f17f16=function(n,e){o(n).enable(e>>>0)},e.wbg.__wbg_enableVertexAttribArray_0c2fc2819912f6b3=function(n,e){o(n).enableVertexAttribArray(e>>>0)},e.wbg.__wbg_getAttribLocation_b2bad8a5b6116f1f=function(n,e,t,_){return o(n).getAttribLocation(o(e),d(t,_))},e.wbg.__wbg_getExtension_6cd75531325282b8=function(){return P((function(n,e,t){const _=o(n).getExtension(d(e,t));return A(_)?0:i(_)}),arguments)},e.wbg.__wbg_getParameter_d30fc1ac9ac34ffc=function(){return P((function(n,e){return i(o(n).getParameter(e>>>0))}),arguments)},e.wbg.__wbg_getProgramInfoLog_07f10e11eb541319=function(n,e,t){const _=o(e).getProgramInfoLog(o(t));var r=A(_)?0:p(_,b.__wbindgen_malloc,b.__wbindgen_realloc),c=s;v()[n/4+1]=c,v()[n/4+0]=r},e.wbg.__wbg_getProgramParameter_ceb4cfbc03f7a74b=function(n,e,t){return i(o(n).getProgramParameter(o(e),t>>>0))},e.wbg.__wbg_getShaderInfoLog_6788bbcb07e46591=function(n,e,t){const _=o(e).getShaderInfoLog(o(t));var r=A(_)?0:p(_,b.__wbindgen_malloc,b.__wbindgen_realloc),c=s;v()[n/4+1]=c,v()[n/4+0]=r},e.wbg.__wbg_getUniformLocation_c6dfe99dcd260a55=function(n,e,t,_){const r=o(n).getUniformLocation(o(e),d(t,_));return A(r)?0:i(r)},e.wbg.__wbg_linkProgram_23751aba930c7f0c=function(n,e){o(n).linkProgram(o(e))},e.wbg.__wbg_pixelStorei_96bd9a13400d6b48=function(n,e,t){o(n).pixelStorei(e>>>0,t)},e.wbg.__wbg_shaderSource_580a31413cee6156=function(n,e,t,_){o(n).shaderSource(o(e),d(t,_))},e.wbg.__wbg_stencilFunc_0da3069a0a34d766=function(n,e,t,_){o(n).stencilFunc(e>>>0,t,_>>>0)},e.wbg.__wbg_stencilMask_34c2205b5355ab16=function(n,e){o(n).stencilMask(e>>>0)},e.wbg.__wbg_stencilOp_116522daccbe8b11=function(n,e,t,_){o(n).stencilOp(e>>>0,t>>>0,_>>>0)},e.wbg.__wbg_texParameteri_4774c5a61d70319d=function(n,e,t,_){o(n).texParameteri(e>>>0,t>>>0,_)},e.wbg.__wbg_uniform1f_f4314cbaa988e283=function(n,e,t){o(n).uniform1f(o(e),t)},e.wbg.__wbg_uniform1i_096d23b3f6d35c5e=function(n,e,t){o(n).uniform1i(o(e),t)},e.wbg.__wbg_useProgram_85e8d43a8983270e=function(n,e){o(n).useProgram(o(e))},e.wbg.__wbg_vertexAttribPointer_9cf4ab7e9c31e68d=function(n,e,t,_,r,b,c){o(n).vertexAttribPointer(e>>>0,t,_>>>0,0!==r,b,c)},e.wbg.__wbg_viewport_02810f5f49295b55=function(n,e,t,_,r){o(n).viewport(e,t,_,r)},e.wbg.__wbg_debug_68178c61250ae699=function(n){console.debug(o(n))},e.wbg.__wbg_error_e2677af4c7f31a14=function(n){console.error(o(n))},e.wbg.__wbg_info_2fe3b57d78190c6d=function(n){console.info(o(n))},e.wbg.__wbg_log_7761a8b8a8c1864e=function(n){console.log(o(n))},e.wbg.__wbg_warn_8b29c6b80217b0e4=function(n){console.warn(o(n))},e.wbg.__wbg_style_3fb37aa4b3701322=function(n){return i(o(n).style)},e.wbg.__wbg_setvalue_bfcadde2faa3d3c4=function(n,e){o(n).value=e},e.wbg.__wbg_linearRampToValueAtTime_cce473a11e9bb147=function(){return P((function(n,e,t){return i(o(n).linearRampToValueAtTime(e,t))}),arguments)},e.wbg.__wbg_setValueAtTime_3212f62f058dab7d=function(){return P((function(n,e,t){return i(o(n).setValueAtTime(e,t))}),arguments)},e.wbg.__wbg_newwithbuffersourcesequenceandoptions_407953b12cf8d677=function(){return P((function(n,e){return i(new Blob(o(n),o(e)))}),arguments)},e.wbg.__wbg_addEventListener_5822223857fe82cb=function(){return P((function(n,e,t,_){o(n).addEventListener(d(e,t),o(_))}),arguments)},e.wbg.__wbg_addEventListener_a77a92f38176616e=function(){return P((function(n,e,t,_,r){o(n).addEventListener(d(e,t),o(_),o(r))}),arguments)},e.wbg.__wbg_addEventListener_a09abdb50db3cd98=function(){return P((function(n,e,t,_,r){o(n).addEventListener(d(e,t),o(_),0!==r)}),arguments)},e.wbg.__wbg_removeEventListener_0e2fd54517fc188b=function(){return P((function(n,e,t,_){o(n).removeEventListener(d(e,t),o(_))}),arguments)},e.wbg.__wbg_removeEventListener_2882dfde82b5b4d9=function(){return P((function(n,e,t,_,r){o(n).removeEventListener(d(e,t),o(_),0!==r)}),arguments)},e.wbg.__wbg_data_798d534e165849ee=function(n,e){const t=function(n,e){const t=e(1*n.length);return w().set(n,t/1),s=n.length,t}(o(e).data,b.__wbindgen_malloc),_=s;v()[n/4+1]=_,v()[n/4+0]=t},e.wbg.__wbg_newwithu8clampedarray_9c1ae19e8e194f7c=function(){return P((function(n,e,t){return i(new ImageData(U(n,e),t>>>0))}),arguments)},e.wbg.__wbg_instanceof_CanvasRenderingContext2d_9037c3eea625e27b=function(n){return o(n)instanceof CanvasRenderingContext2D},e.wbg.__wbg_setglobalAlpha_3b2742cf3ea8149d=function(n,e){o(n).globalAlpha=e},e.wbg.__wbg_setglobalCompositeOperation_952c3106ecc5f417=function(){return P((function(n,e,t){o(n).globalCompositeOperation=d(e,t)}),arguments)},e.wbg.__wbg_setstrokeStyle_0ab7348da47291bb=function(n,e){o(n).strokeStyle=o(e)},e.wbg.__wbg_setfillStyle_a0bd3a7496c1c5ae=function(n,e){o(n).fillStyle=o(e)},e.wbg.__wbg_setfilter_3d603041d36eb024=function(n,e,t){o(n).filter=d(e,t)},e.wbg.__wbg_setimageSmoothingEnabled_3dbb2403930baf85=function(n,e){o(n).imageSmoothingEnabled=0!==e},e.wbg.__wbg_setlineWidth_5d6cf7ef78aab123=function(n,e){o(n).lineWidth=e},e.wbg.__wbg_setlineCap_7552a7f5a6cb2110=function(n,e,t){o(n).lineCap=d(e,t)},e.wbg.__wbg_setlineJoin_6b65f68b27c132a2=function(n,e,t){o(n).lineJoin=d(e,t)},e.wbg.__wbg_setmiterLimit_b9ee4cbfe23d8c23=function(n,e){o(n).miterLimit=e},e.wbg.__wbg_drawImage_83230048f8deee83=function(){return P((function(n,e,t,_){o(n).drawImage(o(e),t,_)}),arguments)},e.wbg.__wbg_clip_06e31c6883cedcea=function(n,e,t){o(n).clip(o(e),u(t))},e.wbg.__wbg_fill_b59d6423381669b5=function(n,e,t){o(n).fill(o(e),u(t))},e.wbg.__wbg_stroke_6345e439dce2411c=function(n,e){o(n).stroke(o(e))},e.wbg.__wbg_createLinearGradient_7e66eeec20a9f71e=function(n,e,t,_,r){return i(o(n).createLinearGradient(e,t,_,r))},e.wbg.__wbg_createPattern_f64be35193cf6d8a=function(){return P((function(n,e,t,_){const r=o(n).createPattern(o(e),d(t,_));return A(r)?0:i(r)}),arguments)},e.wbg.__wbg_createRadialGradient_bb0c3a1e9025fd4a=function(){return P((function(n,e,t,_,r,b,c){return i(o(n).createRadialGradient(e,t,_,r,b,c))}),arguments)},e.wbg.__wbg_getImageData_50f6c1b814306c32=function(){return P((function(n,e,t,_,r){return i(o(n).getImageData(e,t,_,r))}),arguments)},e.wbg.__wbg_putImageData_f71b039a7f3a0d8a=function(){return P((function(n,e,t,_){o(n).putImageData(o(e),t,_)}),arguments)},e.wbg.__wbg_clearRect_7d73f724a3fc825c=function(n,e,t,_,r){o(n).clearRect(e,t,_,r)},e.wbg.__wbg_fillRect_37d4341db168ab0f=function(n,e,t,_,r){o(n).fillRect(e,t,_,r)},e.wbg.__wbg_restore_2eda799771bbdaf3=function(n){o(n).restore()},e.wbg.__wbg_save_88e5b8eebd3f0de5=function(n){o(n).save()},e.wbg.__wbg_resetTransform_719b2c3de6d07521=function(){return P((function(n){o(n).resetTransform()}),arguments)},e.wbg.__wbg_setTransform_f6e32d675c5c5f30=function(){return P((function(n,e,t,_,r,b,c){o(n).setTransform(e,t,_,r,b,c)}),arguments)},e.wbg.__wbg_transform_441c583c742163e2=function(){return P((function(n,e,t,_,r,b,c){o(n).transform(e,t,_,r,b,c)}),arguments)},e.wbg.__wbg_destination_5bc469ae2192967b=function(n){return i(o(n).destination)},e.wbg.__wbg_sampleRate_07300b65434459c1=function(n){return o(n).sampleRate},e.wbg.__wbg_currentTime_5862ab7e6ff545eb=function(n){return o(n).currentTime},e.wbg.__wbg_new_e2e737399e087a85=function(){return P((function(){return i(new r)}),arguments)},e.wbg.__wbg_suspend_cd50f19e2a5135a2=function(){return P((function(n){return i(o(n).suspend())}),arguments)},e.wbg.__wbg_createBuffer_4d396c7e99dd4d2a=function(){return P((function(n,e,t,_){return i(o(n).createBuffer(e>>>0,t>>>0,_))}),arguments)},e.wbg.__wbg_createBufferSource_45686af9ad60716f=function(){return P((function(n){return i(o(n).createBufferSource())}),arguments)},e.wbg.__wbg_createChannelMerger_268dea9a18a169fa=function(){return P((function(n,e){return i(o(n).createChannelMerger(e>>>0))}),arguments)},e.wbg.__wbg_createChannelSplitter_1d2ce7012578eb9f=function(){return P((function(n,e){return i(o(n).createChannelSplitter(e>>>0))}),arguments)},e.wbg.__wbg_createGain_f0c35f309aa98acc=function(){return P((function(n){return i(o(n).createGain())}),arguments)},e.wbg.__wbg_createScriptProcessor_8408a5fe3a74d40c=function(){return P((function(n,e,t,_){return i(o(n).createScriptProcessor(e>>>0,t>>>0,_>>>0))}),arguments)},e.wbg.__wbg_decodeAudioData_bd288891a2a90d44=function(){return P((function(n,e,t,_){return i(o(n).decodeAudioData(o(e),o(t),o(_)))}),arguments)},e.wbg.__wbg_resume_4b659cb2e2765df8=function(){return P((function(n){return i(o(n).resume())}),arguments)},e.wbg.__wbg_addColorStop_c733d813c9fbfa70=function(){return P((function(n,e,t,_){o(n).addColorStop(e,d(t,_))}),arguments)},e.wbg.__wbg_gain_5e5d2cf1c54d4198=function(n){return i(o(n).gain)},e.wbg.__wbg_baseURI_aca29593bfcdb51d=function(){return P((function(n,e){const t=o(e).baseURI;var _=A(t)?0:p(t,b.__wbindgen_malloc,b.__wbindgen_realloc),r=s;v()[n/4+1]=r,v()[n/4+0]=_}),arguments)},e.wbg.__wbg_appendChild_e9d52952defb480f=function(){return P((function(n,e){return i(o(n).appendChild(o(e)))}),arguments)},e.wbg.__wbg_get_f0f4f1608ebf633e=function(n,e){return i(o(n)[e>>>0])},e.wbg.__wbg_new_2ab697f1555e0dbc=function(){return i(new Array)},e.wbg.__wbg_newnoargs_fc5356289219b93b=function(n,e){return i(new Function(d(n,e)))},e.wbg.__wbg_next_9ef803116340cdc1=function(){return P((function(n){return i(o(n).next())}),arguments)},e.wbg.__wbg_done_2a1e30464aae6a4d=function(n){return o(n).done},e.wbg.__wbg_value_a495c29471c31da6=function(n){return i(o(n).value)},e.wbg.__wbg_get_89247d3aeaa38cc5=function(){return P((function(n,e){return i(Reflect.get(o(n),o(e)))}),arguments)},e.wbg.__wbg_call_4573f605ca4b5f10=function(){return P((function(n,e){return i(o(n).call(o(e)))}),arguments)},e.wbg.__wbg_new_306ce8d57919e6ae=function(){return i(new Object)},e.wbg.__wbg_self_ba1ddafe9ea7a3a2=function(){return P((function(){return i(self.self)}),arguments)},e.wbg.__wbg_window_be3cc430364fd32c=function(){return P((function(){return i(window.window)}),arguments)},e.wbg.__wbg_globalThis_56d9c9f814daeeee=function(){return P((function(){return i(globalThis.globalThis)}),arguments)},e.wbg.__wbg_global_8c35aeee4ac77f2b=function(){return P((function(){return i(t.g.global)}),arguments)},e.wbg.__wbg_isArray_628aca8c24017cde=function(n){return Array.isArray(o(n))},e.wbg.__wbg_of_7559713242530fee=function(n,e){return i(Array.of(o(n),o(e)))},e.wbg.__wbg_push_811c8b08bf4ff9d5=function(n,e){return o(n).push(o(e))},e.wbg.__wbg_instanceof_ArrayBuffer_a91000e6b0653ed1=function(n){return o(n)instanceof ArrayBuffer},e.wbg.__wbg_new_d6b543561a30e21e=function(n){return i(new ArrayBuffer(n>>>0))},e.wbg.__wbg_slice_157fd1b284a66baf=function(n,e,t){return i(o(n).slice(e>>>0,t>>>0))},e.wbg.__wbg_values_644ed6c9e45c1e38=function(n){return i(o(n).values())},e.wbg.__wbg_apply_5db7f1649d649fe3=function(){return P((function(n,e,t){return i(o(n).apply(o(e),o(t)))}),arguments)},e.wbg.__wbg_call_9855a4612eb496cb=function(){return P((function(n,e,t){return i(o(n).call(o(e),o(t)))}),arguments)},e.wbg.__wbg_getTime_7c8d3b79f51e2b87=function(n){return o(n).getTime()},e.wbg.__wbg_getTimezoneOffset_d7a89256f8181a06=function(n){return o(n).getTimezoneOffset()},e.wbg.__wbg_new0_6b49a1fca8534d39=function(){return i(new Date)},e.wbg.__wbg_instanceof_Object_0c703ab7113e61ec=function(n){return o(n)instanceof Object},e.wbg.__wbg_entries_b24687f151d83be3=function(n){return i(Object.entries(o(n)))},e.wbg.__wbg_fromEntries_06150f1d39e0a856=function(){return P((function(n){return i(Object.fromEntries(o(n)))}),arguments)},e.wbg.__wbg_is_aafa609b540ad47f=function(n,e){return Object.is(o(n),o(e))},e.wbg.__wbg_new_78403b138428b684=function(n,e){try{var t={a:n,b:e};const _=new Promise(((n,e)=>{const _=t.a;t.a=0;try{return function(n,e,t,_){b.wasm_bindgen__convert__closures__invoke2_mut__h778465f0106e7e51(n,e,i(t),i(_))}(_,t.b,n,e)}finally{t.a=_}}));return i(_)}finally{t.a=t.b=0}},e.wbg.__wbg_resolve_f269ce174f88b294=function(n){return i(Promise.resolve(o(n)))},e.wbg.__wbg_then_1c698eedca15eed6=function(n,e){return i(o(n).then(o(e)))},e.wbg.__wbg_then_4debc41d4fc92ce5=function(n,e,t){return i(o(n).then(o(e),o(t)))},e.wbg.__wbg_buffer_de1150f91b23aa89=function(n){return i(o(n).buffer)},e.wbg.__wbg_newwithbyteoffsetandlength_9ca61320599a2c84=function(n,e,t){return i(new Uint8Array(o(n),e>>>0,t>>>0))},e.wbg.__wbg_new_97cf52648830a70d=function(n){return i(new Uint8Array(o(n)))},e.wbg.__wbg_set_a0172b213e2469e9=function(n,e,t){o(n).set(o(e),t>>>0)},e.wbg.__wbg_length_e09c0b925ab8de5d=function(n){return o(n).length},e.wbg.__wbg_newwithlength_e833b89f9db02732=function(n){return i(new Uint8Array(n>>>0))},e.wbg.__wbg_fill_bee5ae4d98e7f2b0=function(n,e,t,_){return i(o(n).fill(e,t>>>0,_>>>0))},e.wbg.__wbg_buffer_deb8de1785238b3d=function(n){return i(o(n).buffer)},e.wbg.__wbg_subarray_9482ae5cd5cd99d3=function(n,e,t){return i(o(n).subarray(e>>>0,t>>>0))},e.wbg.__wbg_byteLength_cf73ca7a0d44cb85=function(n){return o(n).byteLength},e.wbg.__wbg_byteOffset_799e1b40fc3f8b73=function(n){return o(n).byteOffset},e.wbg.__wbg_ownKeys_5a935243d98fcf13=function(){return P((function(n){return i(Reflect.ownKeys(o(n)))}),arguments)},e.wbg.__wbg_set_b12cd0ab82903c2f=function(){return P((function(n,e,t){return Reflect.set(o(n),o(e),o(t))}),arguments)},e.wbg.__wbindgen_debug_string=function(n,e){const t=p(S(o(e)),b.__wbindgen_malloc,b.__wbindgen_realloc),_=s;v()[n/4+1]=_,v()[n/4+0]=t},e.wbg.__wbindgen_throw=function(n,e){throw new Error(d(n,e))},e.wbg.__wbindgen_memory=function(){return i(b.memory)},e.wbg.__wbindgen_closure_wrapper339=function(n,e,t){return i(C(n,e,3,T))},e.wbg.__wbindgen_closure_wrapper341=function(n,e,t){return i(C(n,e,3,T))},e.wbg.__wbindgen_closure_wrapper343=function(n,e,t){return i(C(n,e,3,T))},e.wbg.__wbindgen_closure_wrapper345=function(n,e,t){return i(C(n,e,3,R))},e.wbg.__wbindgen_closure_wrapper347=function(n,e,t){return i(C(n,e,3,T))},e.wbg.__wbindgen_closure_wrapper349=function(n,e,t){return i(C(n,e,3,E))},e.wbg.__wbindgen_closure_wrapper351=function(n,e,t){return i(C(n,e,3,T))},e.wbg.__wbindgen_closure_wrapper353=function(n,e,t){return i(C(n,e,3,T))},e.wbg.__wbindgen_closure_wrapper7001=function(n,e,t){return i(C(n,e,2783,k))},e}function q(n,e){return b=n.exports,H.__wbindgen_wasm_module=e,L=new Float32Array(b.memory.buffer),h=new Float64Array(b.memory.buffer),y=new Int32Array(b.memory.buffer),F=new Uint32Array(b.memory.buffer),g=new Uint8Array(b.memory.buffer),M=new Uint8ClampedArray(b.memory.buffer),b}function G(n){const e=V(),t=new WebAssembly.Module(n);return q(new WebAssembly.Instance(t,e),t)}async function H(n){void 0===n&&(n=new URL(t(931),t.b));const e=V();("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n));const{instance:_,module:r}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}(await n,e);return q(_,r)}const N=H},931:(n,e,t)=>{n.exports=t.p+"120167ce13cfb8f97611.wasm"}}]);
//# sourceMappingURL=core.ruffle.1b97b916157f5e079188.js.map