(function(e){
    function t(t){
        for(var r,o,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),i()
    }

    function i(){
        for(var e,t=0;t<a.length;t++){
            for(var i=a[t],r=!0,s=1;s<i.length;s++){
                var c=i[s];0!==n[c]&&(r=!1)
            }
            r&&(a.splice(t--,1),e=o(o.s=i[0]))
        }
        return e
    }

    var r={},n={app:0},a=[];function o(t){
        if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports
    }

    o.m=e,o.c=r,o.d=function(e,t,i){
        o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})
    }
    
    ,o.r=function(e){
        "undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})
    }
    
    ,o.t=function(e,t){
        if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(i,r,function(t){return e[t]}.bind(null,r));
        return i
    }
    
    ,o.n=function(e){
        var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};
        
        return o.d(t,"a",t),t
    }
    
    ,o.o=function(e,t){
        return Object.prototype.hasOwnProperty.call(e,t)
    }
    
    ,o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),i()
})

({
    0:function(e,t,i){e.exports=i("56d7")}
    ,"0497":function(e,t,i){}
    ,"061e":function(e,t,i){e.exports=i.p+"../static/img/arrow.92973e90.png"}
    ,"070d":function(e,t,i){e.exports=i.p+"../static/img/plexus_poster.415ffacd.jpg"}
    ,"0735":function(e,t,i){"use strict";i("5eba")}
    ,"0b72":function(e,t,i){}
    ,"0fec":function(e,t,i){e.exports=i.p+"../static/img/stability.d701c8e1.png"}
    ,"19b1":function(e,t,i){e.exports=i.p+"media/plexus.9a99d720.mp4"}
    ,"25f7":function(e,t,i){"use strict";i("6730")}
    ,"299f":function(e,t,i){e.exports=i.p+"../static/img/growth.db09bc64.png"}
    ,"29dc":function(e,t,i){}
    ,"31b1":function(e,t){
        e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAiCAYAAADCp/A1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAkvSURBVHgB7ZhPbBxXHcd/78/82Zld76z/2/lTJzRS47SR0xRIpdIEpKgNF8yhEkUVKicuSG1PSFxILhw4IG7cIOKEKgShRfwRFaTqAargpiQhhKRJ7DiJ7bW93t3Z3Zmdmfcevzc7G9tJbNlJuPGUVcbjnXmf+f6+v+97Y4D/jyczCDzB4XnHPBpbP9CHUpBT1fCP0/AEBoMnNDz3q29Rs3SGGPYxs6dvwhl6apK1Cl4QX/8QHnM8tpL5/ImjnFmnqe2NqeY8gFKdm+L/nWM5TZU6tRj+5TQ84nhkSM97dSwR9s8pyGOEECAy0mRA1kASJcHJD4FluCDbrTOV5u13quHZadjm2Dak9l0i82+BMt4GRT1Kww6YVi6D1IA0vblapyzDs1KK0zSSp+Zh67Db8qTbN/mmlNYf8LJXKU1sSkUKpgeKiQAEhCgC53geVSQpXgaaPYTB7QnCyKRLRmsNeevTrcy7JSVt7+tHCZEncaJjROHURK5TTEkBkfAhiUYg13cYBj8/DnTuIlSufLiqcqZoF5YTjg8VTwsp3ymLj85sNv+mSnrepAfOvp+CjH+CaGOUpEg4UffpCBjKhFDOQ5LkgNF94O1/FgYPTsD4U8ehnw3A/N0p5JNASUfVTuk1s8Dvcw8t8A2P7Rlz5NA/G3C7umVIDSfz499LQP4SfXWEUCMrXQdOfyxpw/FgEvZFz0BEFbSMEMy+/dB36BAMezuhuBLBzMXfABcEGONogyiFTa/PgEFqu0g8FBOG4bxdUKPgqNGZ+2EfhPQmPMl6zqO7JgnhNkH1up4ga/1HkvS4T/TDcDwEA6IEjegiRFCD3T3j0Lg5BYt3ptIyG8xCLzqQiBCvEJ14ymC791YqAcPMo53ak1TlfxvCUnVjyHA+9HpL1UK+NBG1Q08Icu9m3UboqlmhZfjM/Fc6qSNzUIoLEC/PwK2Zv8JS+RLenKVPFCNcIyxrD6YCkoysaxuGD6Hn6B82p5nbPjXrnz+7FumhjaMOKwOGwtE34x9/5+P56W/N3F7aQdKyqFTN9CK5eqzz0Mbyj0aDkEsYBFCFRV6B2NBAHBUMsmtk2mjd+6SxhJUa6C/5Lx987hevGyd+doQeuUbeI/6mkOq1d3GW10qgogH985+Kn+z4vXXuu+9+8I+v+fUAKKegktZqLgJkAd7pYkMy6A8d8LkPAU06M+gHIrAuTzk1oVAw4SsvPX/u9cKJ77+0/PydFCAxq/AiLJCTGCGbKanHpfFLpjfoDXLOSwvtivHpwNW9v25NnTx3+dqBZsRABrV76nTKv5qHtPO4mdqwJuglKsfBsgw4sG/39W9OvPKjl2++8HePO4Izp2FTe5H8jrTuZ3kYZGa5w9qvxrdHj/Z9qe+FvW0Z9a8kvrfyTPv4+erdVy7MCy9emQMZNjvB3Y2lrINB3b/6QJqNzx3cHb64a/97I/8Z/NWw0ee7vFCbD+dn37jwwwWAKa2ehO4KsQEk7cL1QGAzG/KjbFfJNnjvmDUyPJobGsIwdxOSGHCw8OVP7tz64o250KIY8IG/kJW849EuKE3bTcGOHf1wYGTnx/3L7gdGQKsuc1rz8dLctfbs7XZQXb4pF2t3fDQvAHbXVJZNncHWAz5teGA4DtS9xOR9tqCDLjNHIhWXytGiPReVMfSEkaduDhaj2b1u7+WBnbZdCcQQAQviqLEaU/rmlEPOsuHQs3tufWHgc+/Tmfi8iBJZiSvyo8pU/XprWoZx20qksBOVcBKHxMLrQsgjYEV1FV2NQBg3isBcgKBXGbSXKOahpfI4qZ2jVs41ciannKEyNM9zfK+7xx0we3Pp0xVZ8YpdfuPitbtFiLGbcUdEMeBHh4q1Q6Xdf3YW2VX9vbaMxb+b1+rLUSVMJAglMTllGDTjsIHF8BURNRJby/jVlRoI9NFlHcaSZaCo4oDtQliUBq5lEgYIUA/PO4oqS4Bg6ElCKSU2M1mshCpHS+1YRhJV5SymUV/TOVf0jGq5WR5OlCT7B/v/dgh2vW81WFnimG3fbV2oX66GIkyTN1ExqUQ1EagI44JwhDBxV8WBx4pLFgWgsOyLyZom0WXf6xaB9kvOhtFLCEnyioJBgWr1GEPAjicocQ2b5WiOdn0yltvpjJpDjsUtFiRNWzvT4U5b/24hWgquNq83sKSpx2IplS99kYgk/VlgPODvEgycCFPTByKWaCLmayCXAG409VfYKugI1loYhIGBgEzHLMn2sDLNOKwz0acURDLGtUPi1oITPapJPV6OK22L2aRoFIlBDVGL/ehK63p9NrjTkgpXbYRrqJb0Y+RVstNeUhdcxtiMIbZYgPev4yamzqXCRHYwiha0kmpN4wxADrcBVNIk5jxGLyaondCcRE+i8ZRK+0LDCix5S4b3YHEzklqg3C6HLREkV1s3fF1afedAhqIeNwQ+mkzh8B9u0SL8YDeTJt6viiValpQtGTFfkRA2QqBYicU0jsj67j6GH9/U8cOBupEpC0TKIp4sIFwBnzanqDB1+dGfFLdZG1qg0ygRKtfEOkvVLS2qhw1D2rjM6rUSm4XUJX7MiPoxJC0fXAQv4LvI2W5mPpCT64I8zUp814pN1UMkbnMUKaEVXKVNThXPYMla2ILhcAMMqK7xnVYPvYjCCayQ9h5gVtEqNuWKGbHaKlyakQ8E+kbL4hrY2MxDy8EWLOKeS0dTMYumXAeW4G4xbSy6WhJKOupp3+m9D8KljUHQdx31EKeCp2qN1HtGtNFqsxkkrLfB07ifAcsBlmfY9dRQPRgzHq40mLppjU0UlNN7sAT33ULvcRNUL8L1p4UZ6HNCV7BN6gKI34IYO9cMu1m4GcBW3xazmNqJsBxhLYcBWsCAHkQporoFVNpRKSztvPZIlSh8kcW8bWI+rChcaHB7UW1BG5VLsClua7i0e7cy+XbGGljI5cBGWOhBDXsxiEsIpW3BZCe1QqlLm5AaqrqCVHWAJqo3h76DdWvzViZ9lJFuagCGTOxEB9fbHgbcozzBBCCYsyrGvGvimuGjVH4AEcJxbIzP4u3ArZ3scUbmV2k7ELsCTEeZjJNIJBRYEEALwfSLTarelkr7v4Ds3iOzgI0f3BGDieUM48x32yrtRhM8qZFtVLp/tnh4nDzK+C/G1ssSphW40gAAAABJRU5ErkJggg=="
    }
    ,"32d5":function(e,t,i){"use strict";i("d107")}
    ,"339c":function(e,t,i){"use strict";i("af11")}
    ,3855:function(e,t,i){"use strict";i("45ec")}
    ,"40e9":function(e,t,i){"use strict";i("6191")}
    ,4344:function(e,t,i){"use strict";i("a0f4")}
    ,"45ec":function(e,t,i){}
    ,"48aa":function(e,t,i){e.exports=i.p+"../static/img/processor.3b437555.png"}
    ,"4c21":function(e,t,i){e.exports=i.p+"../static/img/safeguard.bb830fd7.png"}
    ,"4ec9":function(e,t,i){e.exports=i.p+"../static/img/platform.2da2c1ff.png"}
    ,5077:function(e,t,i){"use strict";i("0b72")}
    ,5150:function(e,t,i){}
    ,"56d7":function(e,t,i){
        "use strict";
        i.r(t);
        i("e260"),i("e6cf"),i("cca6"),i("a79d");
        var r=i("7a23"),n={class:"main"};
        function a(e,t,i,a,o,s){
            var c=Object(r["m"])("screens"),l=Object(r["m"])("navigation-bar"),u=Object(r["m"])("header-bar"),d=Object(r["m"])("fluid-ball");
            
            return Object(r["k"])(),Object(r["d"])("div",n,[Object(r["h"])(c,{delayedActiveScreenNumber:o.delayedActiveScreenNumber,scrollHeight:o.scrollHeight},null,8,["delayedActiveScreenNumber","scrollHeight"])
            ,Object(r["h"])(l,{onOpenScreen:s.openScreen,onCloseNavbar:t[0]||(t[0]=function(e){return o.isNavbarActive=e}),activeScreenNumber:o.activeScreenNumber,isNavbarActive:o.isNavbarActive}
            ,null,8,["onOpenScreen","activeScreenNumber","isNavbarActive"])
            ,Object(r["h"])(u,{onOpenNavbar:t[1]||(t[1]=function(e){return o.isNavbarActive=e}),isNavbarActive:o.isNavbarActive},null,8,["isNavbarActive"])
            ,Object(r["h"])(d,{activeScreenNumber:o.activeScreenNumber},null,8,["activeScreenNumber"])])
        }
        
        var o=i("cffa"),s=i("d4ec"),c=i("bee2"),l=(i("dca8")
        
        ,function(){
            function e(){Object(s["a"])(this,e),this.DELTA_MIN=90,this.swipe_det={sX:0,sY:0,eX:0,eY:0},this.directions=Object.freeze({UP:"up",DOWN:"down",RIGHT:"right",LEFT:"left"}),this.direction=null}
            
            return Object(c["a"])(e,[{key:"mouseWheel",value:function(){
                document.addEventListener("wheel",(function(e){
                    void 0!==e.wheelDeltaY&&this.dispatchEvent(new CustomEvent("scroll",{bubbles:!0,detail:{direction:e.wheelDeltaY/Math.abs(e.wheelDeltaY)}}))
                }))
            }},{key:"touchMove",value:function(){
                    window.addEventListener("touchstart",function(e){
                        var t=e.touches[0];this.swipe_det.sX=t.screenX,this.swipe_det.sY=t.screenY,this.swipe_det.eX=this.swipe_det.sX,this.swipe_det.eY=this.swipe_det.sY
                    }
                    .bind(this),!1)
                    
                    ,window.addEventListener("touchmove",function(e){
                        var t=e.touches[0];this.swipe_det.eX=t.screenX,this.swipe_det.eY=t.screenY
                    }
                    .bind(this),!1)
                    
                    ,window.addEventListener("touchend",function(e){
                        var t=this.swipe_det.eX-this.swipe_det.sX,i=this.swipe_det.eY-this.swipe_det.sY;if(!(Math.pow(t,2)+Math.pow(i,2)<Math.pow(this.deltaMin,2)))
                        {
                            if(0===i||Math.abs(t/i)>1?this.direction=t>0?this.directions.RIGHT:this.directions.LEFT:this.direction=i>0?this.directions.UP:this.directions.DOWN,this.direction){if(this.direction===this.directions.LEFT||this.direction===this.directions.RIGHT)return;document.dispatchEvent(new CustomEvent("scroll",{bubbles:!0,detail:{direction:this.direction===this.directions.UP?1:-1}}))}
                        this.direction=null
                        }
                    }
                    .bind(this),!1)
                }}])
            
            ,e
        }

        ())
    ,u={class:"screens"};
    function d(e,t,i,n,a,o){
        var s=Object(r["m"])("project-twelve-screen")
        ,c=Object(r["m"])("organic-sustainable-screen")
        ,l=Object(r["m"])("econs-screen")
        ,d=Object(r["m"])("blockchain-veterans-screen")
        ,f=Object(r["m"])("architecture-first-screen")
        ,h=Object(r["m"])("architecture-second-screen")
        ,v=Object(r["m"])("tech-solution-screen")
        ,m=Object(r["m"])("econs-solution-screen")
        ,p=Object(r["m"])("token-economy-screen")
        ,b=Object(r["m"])("nomocracy-screen")
        ,g=Object(r["m"])("roadmap-screen");
        
        return Object(r["k"])()
        ,Object(r["d"])("div",u,[Object(r["e"])("div",{
            class:"screens__flow-container",style:Object(r["j"])({
                transform:"translate3d(0, ".concat(i.scrollHeight,"vh, 0)")
            })
        }
        ,[Object(r["h"])(s,{
            class:Object(r["i"])({active:0===i.delayedActiveScreenNumber})
        },null,8,["class"])

        ,Object(r["h"])(l,{
            class:Object(r["i"])({active:1===i.delayedActiveScreenNumber})
        },null,8,["class"])
        
        ,Object(r["h"])(m,{
            class:Object(r["i"])({active:2===i.delayedActiveScreenNumber})
        },null,8,["class"])
        
        ,Object(r["h"])(f,{
            class:Object(r["i"])({active:3===i.delayedActiveScreenNumber})
        },null,8,["class"])
        
        ,Object(r["h"])(g,{
            class:Object(r["i"])({active:4===i.delayedActiveScreenNumber})
        },null,8,["class"])

        ,Object(r["h"])(c,{
            class:Object(r["i"])({active:5===i.delayedActiveScreenNumber})
        },null,8,["class"])
        
        ,Object(r["h"])(v,{
            class:Object(r["i"])({active:6===i.delayedActiveScreenNumber})
        },null,8,["class"])

        ,Object(r["h"])(h,{
            class:Object(r["i"])({active:7===i.delayedActiveScreenNumber})
        },null,8,["class"])
        
        ,Object(r["h"])(d,{
            class:Object(r["i"])({active:8===i.delayedActiveScreenNumber})
        },null,8,["class"])
        
        ,Object(r["h"])(b,{
            class:Object(r["i"])({active:9===i.delayedActiveScreenNumber})
        },null,8,["class"])
        

        ,Object(r["h"])(p,{
            class:Object(r["i"])({active:10===i.delayedActiveScreenNumber})
        },null,8,["class"])
        

 
        ],4)
    ])
    }

    i("a9e3");

    var f={class:"project-twelve"}
    ,h=Object(r["e"])(
        "div"
        ,{class:"project-twelve__title"}
        ,[Object(r["e"])("h1",null,[
            Object(r["e"])("span",null,"Project")
            ,Object(r["e"])("span",null,"Hera")
        ])]
        ,-1
        )
    ,v=Object(r["e"])(
        "div"
        ,{class:"divider"}
        ,null
        ,-1
        )
    ,m=Object(r["f"])(
        '<div class="social"><div class="github"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#5C6BC0" d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"/></svg></div></div><div class="message"><div class="vertical-divider"></div><p>Nuestro proyecto busca solucionar problemas del día a día</p></div>'
        ,2
        )
        
    ,p={
        ref:"canvas",class:"project-twelve__background"
    }

    ;function b(e,t,i,n,a,o){
        var s=Object(r["m"])("learn-button");
        return Object(r["k"])()
        ,Object(r["d"])("div",f,[h,v,Object(r["h"])(s),m,Object(r["e"])("canvas",p,null,512)])
    }

    var g={class:"learn-button",href:"chat/"}
    ,O=Object(r["f"])(
        '<span>Chatea Ahora</span><span class="icon"><svg width="65" height="48" viewBox="0 0 65 48" fill="rgba(5, 0, 255, 0)" xmlns="http://www.w3.org/2000/svg"><rect x="17.5" y="0.5" width="47" height="47" stroke="#126e95"></rect><path class="tip" d="M37.9299 17.9999L43.9999 24.0699L37.9299 30.1399" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="bevel"></path><path class="cane" d="M1 24L43 24" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"></path></svg></span>'
        ,2
        )
    ,x=[O];

    function A(e,t,i,n,a,o){
        return Object(r["k"])()
        ,Object(r["d"])("a",g,x)
    }

    var w={name:"learnButton"}

    ,S=(i("5077"),i("6b0d"))
    ,j=i.n(S);const y=j()(w,[["render",A]]);
    var L=y;

    i("d3b7"),i("cfc3"),i("907a"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7"),i("5cc6"),i("3ca3"),i("ddb0"),i("2b3d"),i("9861"),i("ac1f"),i("00b4"),i("b0c0"),i("84c3");

    function T(e){
        e.width=e.clientWidth,e.height=e.clientHeight;
        var t={
            SIM_RESOLUTION:200,DYE_RESOLUTION:512,DENSITY_DISSIPATION:.95,VELOCITY_DISSIPATION:.95,PRESSURE_DISSIPATION:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.1,SHADING:!0,COLORFUL:!0,PAUSED:!1,BACK_COLOR:{r:8,g:5,b:31},TRANSPARENT:!1,BLOOM:!1,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.8,BLOOM_SOFT_KNEE:.7
        };
        function i(){
            this.id=-1,this.x=0,this.y=0,this.dx=0,this.dy=0,this.down=!1,this.moved=!1,this.color=[30,0,300]
        }
        var r=[],n=[],a=[];
        r.push(new i);
        var o=d(e),l=o.gl,u=o.ext;

        function d(e){
            var t,i,r={
                alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1
            }
            ,n=e.getContext("webgl2",r)
            ,a=!!n;a||(n=e.getContext("webgl",r)||e.getContext("experimental-webgl",r))
            ,a?(n.getExtension("EXT_color_buffer_float"),i=n.getExtension("OES_texture_float_linear"))
            :(t=n.getExtension("OES_texture_half_float"),i=n.getExtension("OES_texture_half_float_linear"))
            ,n.clearColor(0,0,0,1);
            var o,s,c,l=a?n.HALF_FLOAT:t.HALF_FLOAT_OES;
            return a?(o=f(n,n.RGBA16F,n.RGBA,l),s=f(n,n.RG16F,n.RG,l),c=f(n,n.R16F,n.RED,l)):(o=f(n,n.RGBA,n.RGBA,l),s=f(n,n.RGBA,n.RGBA,l),c=f(n,n.RGBA,n.RGBA,l)),{
                gl:n,ext:{formatRGBA:o,formatRG:s,formatR:c,halfFloatTexType:l,supportLinearFiltering:i}
            }
        }

        function f(e,t,i,r){
            if(!h(e,t,i,r))switch(t){
                case e.R16F:return f(e,e.RG16F,e.RG,r);
                case e.RG16F:return f(e,e.RGBA16F,e.RGBA,r);
                default:return null
            }
            return{internalFormat:t,format:i}
        }
        
        function h(e,t,i,r){
            var n=e.createTexture();
            e.bindTexture(e.TEXTURE_2D,n),
            e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),
            e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),
            e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),
            e.texImage2D(e.TEXTURE_2D,0,t,4,4,0,i,r,null);
            var a=e.createFramebuffer();
            e.bindFramebuffer(e.FRAMEBUFFER,a),
            e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);
            var o=e.checkFramebufferStatus(e.FRAMEBUFFER);
            return o==e.FRAMEBUFFER_COMPLETE
        }
        
        function v(){
            return/Mobi|Android/i.test(navigator.userAgent)
        }
        
        v()&&(t.SHADING=!1)
        ,u.supportLinearFiltering||(t.SHADING=!1,t.BLOOM=!1);

        var m=function(){
            function e(t,i){
                if(Object(s["a"])(this,e),this.uniforms={},this.program=l.createProgram(),l.attachShader(this.program,t),l.attachShader(this.program,i),l.linkProgram(this.program),!l.getProgramParameter(this.program,l.LINK_STATUS))
                throw l.getProgramInfoLog(this.program);
                
                for(var r=l.getProgramParameter(this.program,l.ACTIVE_UNIFORMS),n=0;n<r;n++){
                    var a=l.getActiveUniform(this.program,n).name;
                    this.uniforms[a]=l.getUniformLocation(this.program,a)
                }
            }
            return Object(c["a"])(e,[{key:"bind",value:function(){l.useProgram(this.program)}}]),e
        }
        ();
        
        function p(e,t){
            var i=l.createShader(e);
            if(l.shaderSource(i,t),l.compileShader(i),!l.getShaderParameter(i,l.COMPILE_STATUS))throw l.getShaderInfoLog(i);
            return i
        }
        
        var b,g,O,x,A,w,S,j,y,L,T=p(l.VERTEX_SHADER,"\n    precision highp float;\n    attribute vec2 aPosition;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform vec2 texelSize;\n    void main () {\n        vUv = aPosition * 0.5 + 0.5;\n        vL = vUv - vec2(texelSize.x, 0.0);\n        vR = vUv + vec2(texelSize.x, 0.0);\n        vT = vUv + vec2(0.0, texelSize.y);\n        vB = vUv - vec2(0.0, texelSize.y);\n        gl_Position = vec4(aPosition, 0.0, 1.0);\n    }\n")
        
        ,C=p(l.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float value;\n    void main () {\n        gl_FragColor = value * texture2D(uTexture, vUv);\n    }\n"),B=p(l.FRAGMENT_SHADER,"\n    precision mediump float;\n    uniform vec4 color;\n    void main () {\n        gl_FragColor = color;\n    }\n")
        
        ,_=p(l.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float aspectRatio;\n    #define SCALE 25.0\n    void main () {\n        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));\n        float v = mod(uv.x + uv.y, 2.0);\n        v = v * 0.1 + 0.8;\n        gl_FragColor = vec4(vec3(v), 1.0);\n    }\n")
        
        ,E=p(l.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    void main () {\n        vec3 C = texture2D(uTexture, vUv).rgb;\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n")
        
        ,R=p(l.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform sampler2D uBloom;\n    uniform sampler2D uDithering;\n    uniform vec2 ditherScale;\n    void main () {\n        vec3 C = texture2D(uTexture, vUv).rgb;\n        vec3 bloom = texture2D(uBloom, vUv).rgb;\n        vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n        noise = noise * 2.0 - 1.0;\n        bloom += noise / 800.0;\n        bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n        C += bloom;\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n")
        
        ,D=p(l.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform vec2 texelSize;\n    void main () {\n        vec3 L = texture2D(uTexture, vL).rgb;\n        vec3 R = texture2D(uTexture, vR).rgb;\n        vec3 T = texture2D(uTexture, vT).rgb;\n        vec3 B = texture2D(uTexture, vB).rgb;\n        vec3 C = texture2D(uTexture, vUv).rgb;\n        float dx = length(R) - length(L);\n        float dy = length(T) - length(B);\n        vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n        vec3 l = vec3(0.0, 0.0, 1.0);\n        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n        C.rgb *= diffuse;\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n")
        
        ,k=p(l.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform sampler2D uBloom;\n    uniform sampler2D uDithering;\n    uniform vec2 ditherScale;\n    uniform vec2 texelSize;\n    void main () {\n        vec3 L = texture2D(uTexture, vL).rgb;\n        vec3 R = texture2D(uTexture, vR).rgb;\n        vec3 T = texture2D(uTexture, vT).rgb;\n        vec3 B = texture2D(uTexture, vB).rgb;\n        vec3 C = texture2D(uTexture, vUv).rgb;\n        float dx = length(R) - length(L);\n        float dy = length(T) - length(B);\n        vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n        vec3 l = vec3(0.0, 0.0, 1.0);\n        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n        C *= diffuse;\n        vec3 bloom = texture2D(uBloom, vUv).rgb;\n        vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n        noise = noise * 2.0 - 1.0;\n        bloom += noise / 800.0;\n        bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n        C += bloom;\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n")
        
        ,F=p(l.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform vec3 curve;\n    uniform float threshold;\n    void main () {\n        vec3 c = texture2D(uTexture, vUv).rgb;\n        float br = max(c.r, max(c.g, c.b));\n        float rq = clamp(br - curve.x, 0.0, curve.y);\n        rq = curve.z * rq * rq;\n        c *= max(rq, br - threshold) / max(br, 0.0001);\n        gl_FragColor = vec4(c, 0.0);\n    }\n")
        
        ,N=p(l.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    void main () {\n        vec4 sum = vec4(0.0);\n        sum += texture2D(uTexture, vL);\n        sum += texture2D(uTexture, vR);\n        sum += texture2D(uTexture, vT);\n        sum += texture2D(uTexture, vB);\n        sum *= 0.25;\n        gl_FragColor = sum;\n    }\n")
        
        ,M=p(l.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform float intensity;\n    void main () {\n        vec4 sum = vec4(0.0);\n        sum += texture2D(uTexture, vL);\n        sum += texture2D(uTexture, vR);\n        sum += texture2D(uTexture, vT);\n        sum += texture2D(uTexture, vB);\n        sum *= 0.25;\n        gl_FragColor = sum * intensity;\n    }\n")
        
        ,U=p(l.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTarget;\n    uniform float aspectRatio;\n    uniform vec3 color;\n    uniform vec2 point;\n    uniform float radius;\n    void main () {\n        vec2 p = vUv - point.xy;\n        p.x *= aspectRatio;\n        vec3 splat = exp(-dot(p, p) / radius) * color;\n        vec3 base = texture2D(uTarget, vUv).xyz;\n        gl_FragColor = vec4(base + splat, 1.0);\n    }\n")
        
        ,G=p(l.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform vec2 dyeTexelSize;\n    uniform float dt;\n    uniform float dissipation;\n    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n        vec2 st = uv / tsize - 0.5;\n        vec2 iuv = floor(st);\n        vec2 fuv = fract(st);\n        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n    }\n    void main () {\n        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n        gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);\n        gl_FragColor.a = 1.0;\n    }\n")
        
        ,I=p(l.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform float dt;\n    uniform float dissipation;\n    void main () {\n        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n        gl_FragColor = dissipation * texture2D(uSource, coord);\n        gl_FragColor.a = 1.0;\n    }\n")
        
        ,P=p(l.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uVelocity;\n    void main () {\n        float L = texture2D(uVelocity, vL).x;\n        float R = texture2D(uVelocity, vR).x;\n        float T = texture2D(uVelocity, vT).y;\n        float B = texture2D(uVelocity, vB).y;\n        vec2 C = texture2D(uVelocity, vUv).xy;\n        if (vL.x < 0.0) { L = -C.x; }\n        if (vR.x > 1.0) { R = -C.x; }\n        if (vT.y > 1.0) { T = -C.y; }\n        if (vB.y < 0.0) { B = -C.y; }\n        float div = 0.5 * (R - L + T - B);\n        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n    }\n")
        
        ,H=p(l.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uVelocity;\n    void main () {\n        float L = texture2D(uVelocity, vL).y;\n        float R = texture2D(uVelocity, vR).y;\n        float T = texture2D(uVelocity, vT).x;\n        float B = texture2D(uVelocity, vB).x;\n        float vorticity = R - L - T + B;\n        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n    }\n")
        
        ,X=p(l.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uCurl;\n    uniform float curl;\n    uniform float dt;\n    void main () {\n        float L = texture2D(uCurl, vL).x;\n        float R = texture2D(uCurl, vR).x;\n        float T = texture2D(uCurl, vT).x;\n        float B = texture2D(uCurl, vB).x;\n        float C = texture2D(uCurl, vUv).x;\n        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n        force /= length(force) + 0.0001;\n        force *= curl * C;\n        force.y *= -1.0;\n        vec2 vel = texture2D(uVelocity, vUv).xy;\n        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n    }\n")
        
        ,W=p(l.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uDivergence;\n    vec2 boundary (vec2 uv) {\n        return uv;\n        // uncomment if you use wrap or repeat texture mode\n        // uv = min(max(uv, 0.0), 1.0);\n        // return uv;\n    }\n    void main () {\n        float L = texture2D(uPressure, boundary(vL)).x;\n        float R = texture2D(uPressure, boundary(vR)).x;\n        float T = texture2D(uPressure, boundary(vT)).x;\n        float B = texture2D(uPressure, boundary(vB)).x;\n        float C = texture2D(uPressure, vUv).x;\n        float divergence = texture2D(uDivergence, vUv).x;\n        float pressure = (L + R + B + T - divergence) * 0.25;\n        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n    }\n")
        
        ,z=p(l.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uVelocity;\n    vec2 boundary (vec2 uv) {\n        return uv;\n        // uv = min(max(uv, 0.0), 1.0);\n        // return uv;\n    }\n    void main () {\n        float L = texture2D(uPressure, boundary(vL)).x;\n        float R = texture2D(uPressure, boundary(vR)).x;\n        float T = texture2D(uPressure, boundary(vT)).x;\n        float B = texture2D(uPressure, boundary(vB)).x;\n        vec2 velocity = texture2D(uVelocity, vUv).xy;\n        velocity.xy -= vec2(R - L, T - B);\n        gl_FragColor = vec4(velocity, 0.0, 1.0);\n    }\n")
        
        ,V=function(){
            return l.bindBuffer(l.ARRAY_BUFFER,l.createBuffer())
            ,l.bufferData(l.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),l.STATIC_DRAW)
            ,l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,l.createBuffer())
            ,l.bufferData(l.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),l.STATIC_DRAW)
            ,l.vertexAttribPointer(0,2,l.FLOAT,!1,0,0)
            ,l.enableVertexAttribArray(0)
            ,function(e){
                l.bindFramebuffer(l.FRAMEBUFFER,e),l.drawElements(l.TRIANGLES,6,l.UNSIGNED_SHORT,0)
            }
        }
        ()
        
        ,Y=be("LDR_RGB1_0.png")
        ,Z=new m(T,C)
        ,K=new m(T,B)
        ,Q=new m(T,_)
        ,J=new m(T,E)
        ,q=new m(T,R)
        ,$=new m(T,D)
        ,ee=new m(T,k)
        ,te=new m(T,F)
        ,ie=new m(T,N)
        ,re=new m(T,M)
        ,ne=new m(T,U)
        ,ae=new m(T,u.supportLinearFiltering?I:G)
        ,oe=new m(T,P)
        ,se=new m(T,H)
        ,ce=new m(T,X)
        ,le=new m(T,W)
        ,ue=new m(T,z);
        
        function de(){
            var e=Be(t.SIM_RESOLUTION),i=Be(t.DYE_RESOLUTION);
            b=e.width,g=e.height,O=i.width,x=i.height;
            var r=u.halfFloatTexType,n=u.formatRGBA,a=u.formatRG,o=u.formatR,s=u.supportLinearFiltering?l.LINEAR:l.NEAREST;
            A=null==A?ve(O,x,n.internalFormat,n.format,r,s):pe(A,O,x,n.internalFormat,n.format,r,s)
            ,w=null==w?ve(b,g,a.internalFormat,a.format,r,s):pe(w,b,g,a.internalFormat,a.format,r,s)
            ,S=he(b,g,o.internalFormat,o.format,r,l.NEAREST)
            ,j=he(b,g,o.internalFormat,o.format,r,l.NEAREST)
            ,y=ve(b,g,o.internalFormat,o.format,r,l.NEAREST)
            ,fe()
        }

        function fe(){
            var e=Be(t.BLOOM_RESOLUTION),i=u.halfFloatTexType,r=u.formatRGBA,n=u.supportLinearFiltering?l.LINEAR:l.NEAREST;
            L=he(e.width,e.height,r.internalFormat,r.format,i,n),a.length=0;
            for(var o=0;o<t.BLOOM_ITERATIONS;o++){
                var s=e.width>>o+1,c=e.height>>o+1;
                if(s<2||c<2)break;
                var d=he(s,c,r.internalFormat,r.format,i,n);
                a.push(d)
            }
        }
        
        function he(e,t,i,r,n,a){
            l.activeTexture(l.TEXTURE0);
            var o=l.createTexture();
            l.bindTexture(l.TEXTURE_2D,o),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,a),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,a),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),l.texImage2D(l.TEXTURE_2D,0,i,e,t,0,r,n,null);
            var s=l.createFramebuffer();
            return l.bindFramebuffer(l.FRAMEBUFFER,s),l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,o,0),l.viewport(0,0,e,t),l.clear(l.COLOR_BUFFER_BIT),{
                texture:o,fbo:s,width:e,height:t,attach:function(e){
                    return l.activeTexture(l.TEXTURE0+e),l.bindTexture(l.TEXTURE_2D,o),e
                }
            }
        }
        
        function ve(e,t,i,r,n,a){
            var o=he(e,t,i,r,n,a),s=he(e,t,i,r,n,a);
            return{
                get read(){return o},set read(e){o=e},get write(){return s},set write(e){s=e},swap:function(){var e=o;o=s,s=e}
            }
        }
        
        function me(e,t,i,r,n,a,o){
            var s=he(t,i,r,n,a,o);
            return Z.bind(),l.uniform1i(Z.uniforms.uTexture,e.attach(0)),l.uniform1f(Z.uniforms.value,1),V(s.fbo),s
        }
        
        function pe(e,t,i,r,n,a,o){
            return e.read=me(e.read,t,i,r,n,a,o),e.write=he(t,i,r,n,a,o),e
        }
        
        function be(e){
            var t=l.createTexture();
            l.bindTexture(l.TEXTURE_2D,t),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.REPEAT),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.REPEAT),l.texImage2D(l.TEXTURE_2D,0,l.RGB,1,1,0,l.RGB,l.UNSIGNED_BYTE,new Uint8Array([255,255,255]));
            var i={texture:t,width:1,height:1,attach:function(e){
                return l.activeTexture(l.TEXTURE0+e),l.bindTexture(l.TEXTURE_2D,t),e
            }}
            ,r=new Image;
            return r.onload=function(){
                i.width=r.width,i.height=r.height,l.bindTexture(l.TEXTURE_2D,t),l.texImage2D(l.TEXTURE_2D,0,l.RGB,l.RGB,l.UNSIGNED_BYTE,r) 
            }
            ,r.src=e,i
        }
        
        de(),ye(parseInt(20*Math.random())+5);
        var ge=Date.now();
        
        function Oe(){
            Le(),xe(),t.PAUSED||Ae(.016),we(null),requestAnimationFrame(Oe)
        }
        
        function xe(){
            n.length>0&&ye(n.pop());for(var e=0;e<r.length;e++){
                var i=r[e];i.moved&&(je(i.x,i.y,i.dx,i.dy,i.color),i.moved=!1)
            }
            if(t.COLORFUL&&ge+100<Date.now()){
                ge=Date.now();
                for(var a=0;a<r.length;a++){
                    var o=r[a];o.color=Te()
                }
            }
        }
        
        function Ae(e){
            l.disable(l.BLEND),l.viewport(0,0,b,g),se.bind(),l.uniform2f(se.uniforms.texelSize,1/b,1/g),l.uniform1i(se.uniforms.uVelocity,w.read.attach(0)),V(j.fbo),ce.bind(),l.uniform2f(ce.uniforms.texelSize,1/b,1/g),l.uniform1i(ce.uniforms.uVelocity,w.read.attach(0)),l.uniform1i(ce.uniforms.uCurl,j.attach(1)),l.uniform1f(ce.uniforms.curl,t.CURL),l.uniform1f(ce.uniforms.dt,e),V(w.write.fbo),w.swap(),oe.bind(),l.uniform2f(oe.uniforms.texelSize,1/b,1/g),l.uniform1i(oe.uniforms.uVelocity,w.read.attach(0)),V(S.fbo),Z.bind(),l.uniform1i(Z.uniforms.uTexture,y.read.attach(0)),l.uniform1f(Z.uniforms.value,t.PRESSURE_DISSIPATION),V(y.write.fbo),y.swap(),le.bind(),l.uniform2f(le.uniforms.texelSize,1/b,1/g),l.uniform1i(le.uniforms.uDivergence,S.attach(0));for(var i=0;i<t.PRESSURE_ITERATIONS;i++)l.uniform1i(le.uniforms.uPressure,y.read.attach(1)),V(y.write.fbo),y.swap();
            
            ue.bind(),l.uniform2f(ue.uniforms.texelSize,1/b,1/g),l.uniform1i(ue.uniforms.uPressure,y.read.attach(0)),l.uniform1i(ue.uniforms.uVelocity,w.read.attach(1)),V(w.write.fbo),w.swap(),ae.bind(),l.uniform2f(ae.uniforms.texelSize,1/b,1/g),u.supportLinearFiltering||l.uniform2f(ae.uniforms.dyeTexelSize,1/b,1/g);
            
            var r=w.read.attach(0);
            
            l.uniform1i(ae.uniforms.uVelocity,r),l.uniform1i(ae.uniforms.uSource,r),l.uniform1f(ae.uniforms.dt,e),l.uniform1f(ae.uniforms.dissipation,t.VELOCITY_DISSIPATION),V(w.write.fbo),w.swap(),l.viewport(0,0,O,x),u.supportLinearFiltering||l.uniform2f(ae.uniforms.dyeTexelSize,1/O,1/x),l.uniform1i(ae.uniforms.uVelocity,w.read.attach(0)),l.uniform1i(ae.uniforms.uSource,A.read.attach(1)),l.uniform1f(ae.uniforms.dissipation,t.DENSITY_DISSIPATION),V(A.write.fbo),A.swap()
        }
        
        function we(i){
            t.BLOOM&&Se(A.read,L),null!=i&&t.TRANSPARENT?l.disable(l.BLEND):(l.blendFunc(l.ONE,l.ONE_MINUS_SRC_ALPHA),l.enable(l.BLEND));var r=null==i?l.drawingBufferWidth:O,n=null==i?l.drawingBufferHeight:x;
            if(l.viewport(0,0,r,n),!t.TRANSPARENT){
                K.bind();var a=t.BACK_COLOR;l.uniform4f(K.uniforms.color,a.r/255,a.g/255,a.b/255,1),V(i)
            }
            if(null==i&&t.TRANSPARENT&&(Q.bind(),l.uniform1f(Q.uniforms.aspectRatio,e.width/e.height),V(null)),t.SHADING){
                var o=t.BLOOM?ee:$;if(o.bind(),l.uniform2f(o.uniforms.texelSize,1/r,1/n),l.uniform1i(o.uniforms.uTexture,A.read.attach(0)),t.BLOOM){
                    l.uniform1i(o.uniforms.uBloom,L.attach(1)),l.uniform1i(o.uniforms.uDithering,Y.attach(2));
                    var s=_e(Y,r,n);
                    l.uniform2f(o.uniforms.ditherScale,s.x,s.y)
                }
            }
            else{
                var c=t.BLOOM?q:J;
                if(c.bind(),l.uniform1i(c.uniforms.uTexture,A.read.attach(0)),t.BLOOM){
                    l.uniform1i(c.uniforms.uBloom,L.attach(1)),l.uniform1i(c.uniforms.uDithering,Y.attach(2));
                    var u=_e(Y,r,n);
                    l.uniform2f(c.uniforms.ditherScale,u.x,u.y)
                }
            }
            V(i)
        }
        
        function Se(e,i){
            if(!(a.length<2)){
                var r=i;l.disable(l.BLEND),te.bind();
                var n=t.BLOOM_THRESHOLD*t.BLOOM_SOFT_KNEE+1e-4,o=t.BLOOM_THRESHOLD-n,s=2*n,c=.25/n;l.uniform3f(te.uniforms.curve,o,s,c),l.uniform1f(te.uniforms.threshold,t.BLOOM_THRESHOLD),l.uniform1i(te.uniforms.uTexture,e.attach(0)),l.viewport(0,0,r.width,r.height),V(r.fbo),ie.bind();
                for(var u=0;u<a.length;u++){
                    var d=a[u];l.uniform2f(ie.uniforms.texelSize,1/r.width,1/r.height),l.uniform1i(ie.uniforms.uTexture,r.attach(0)),l.viewport(0,0,d.width,d.height),V(d.fbo),r=d
                }
                l.blendFunc(l.ONE,l.ONE),l.enable(l.BLEND);
                for(var f=a.length-2;f>=0;f--){
                    var h=a[f];
                    l.uniform2f(ie.uniforms.texelSize,1/r.width,1/r.height),l.uniform1i(ie.uniforms.uTexture,r.attach(0)),l.viewport(0,0,h.width,h.height),V(h.fbo),r=h}l.disable(l.BLEND),re.bind(),l.uniform2f(re.uniforms.texelSize,1/r.width,1/r.height),l.uniform1i(re.uniforms.uTexture,r.attach(0)),l.uniform1f(re.uniforms.intensity,t.BLOOM_INTENSITY),l.viewport(0,0,i.width,i.height),V(i.fbo)
                }
        }

        function je(i,r,n,a,o){
            l.viewport(0,0,b,g),ne.bind(),l.uniform1i(ne.uniforms.uTarget,w.read.attach(0)),l.uniform1f(ne.uniforms.aspectRatio,e.width/e.height),l.uniform2f(ne.uniforms.point,i/e.width,1-r/e.height),l.uniform3f(ne.uniforms.color,n,-a,1),l.uniform1f(ne.uniforms.radius,t.SPLAT_RADIUS/100),V(w.write.fbo),w.swap(),l.viewport(0,0,O,x),l.uniform1i(ne.uniforms.uTarget,A.read.attach(0)),l.uniform3f(ne.uniforms.color,o.r,o.g,o.b),V(A.write.fbo),A.swap()
        }
        
        function ye(t){
            for(var i=0;i<t;i++){
                var r=Te();
                r.r*=10,r.g*=10,r.b*=10;var n=e.width*Math.random(),a=e.height*Math.random(),o=1e3*(Math.random()-.5),s=1e3*(Math.random()-.5);
                je(n,a,o,s,r)
            }
        }
        
        function Le(){
            e.width==e.clientWidth&&e.height==e.clientHeight||(e.width=e.clientWidth,e.height=e.clientHeight,de())
        }
        
        function Te(){
            var e=Ce(Math.random(),1,1);
            return e.r*=.15,e.g*=.15,e.b*=.15,e
        }
        
        function Ce(e,t,i){
            var r,n,a,o,s,c,l,u;
            switch(o=Math.floor(6*e),s=6*e-o,c=i*(1-t),l=i*(1-s*t),u=i*(1-(1-s)*t),o%6){
                case 0:r=i,n=u,a=c;
                break;
                case 1:r=l,n=i,a=c;
                break;
                case 2:r=c,n=i,a=u;
                break;
                case 3:r=c,n=l,a=i;
                break;
                case 4:r=u,n=c,a=i;
                break;
                case 5:r=i,n=c,a=l;
                break
            }
            return{r:r,g:n,b:a}
        }
        
        function Be(e){
            var t=l.drawingBufferWidth/l.drawingBufferHeight;t<1&&(t=1/t);
            var i=Math.round(e*t),r=Math.round(e);
            return l.drawingBufferWidth>l.drawingBufferHeight?{
                width:i,height:r
            }
            :{width:r,height:i}
        }
        
        function _e(e,t,i){
            return{x:t/e.width,y:i/e.height}
        }
        
        Oe()
        
        ,e.addEventListener("mousemove",(function(e){
            r[0].moved=r[0].down,r[0].dx=5*(e.offsetX-r[0].x),r[0].dy=5*(e.offsetY-r[0].y),r[0].x=e.offsetX,r[0].y=e.offsetY
        }))

        ,e.addEventListener("touchmove",(function(e){
            e.preventDefault();
            for(var t=e.targetTouches,i=0;i<t.length;i++){
                var n=r[i];
                n.moved=n.down,n.dx=8*(t[i].pageX-n.x),n.dy=8*(t[i].pageY-n.y),n.x=t[i].pageX,n.y=t[i].pageY
            }
        }),!1)
        
        ,e.addEventListener("mousemove",(function(){
            r[0].down=!0,r[0].color=Te()
        }))
        
        ,e.addEventListener("touchstart",(function(e){
            e.preventDefault();
            for(var t=e.targetTouches,n=0;n<t.length;n++)n>=r.length&&r.push(new i),r[n].id=t[n].identifier,r[n].down=!0,r[n].x=t[n].pageX,r[n].y=t[n].pageY,r[n].color=Te()
        }))
        
        ,window.addEventListener("mouseup",(function(){
            r[0].down=!1
        }))
        
        ,window.addEventListener("touchend",(function(e){
            for(var t=e.changedTouches,i=0;i<t.length;i++)for(var n=0;n<r.length;n++)t[i].identifier==r[n].id&&(r[n].down=!1)
        }))
        
        ,window.addEventListener("keydown",(function(e){
            "KeyP"===e.code&&(t.PAUSED=!t.PAUSED)," "===e.key&&n.push(parseInt(20*Math.random())+5)
        }))
    }
    var C={
        name:"projectTwelveScreen",components:{learnButton:L},mounted:function(){T(this.$refs.canvas)},data:function(){return{}}
    };
    
    i("57aa");
    const B=j()(C,[["render",b]]);
    
    var _=B,E=i("4c21"),R=i.n(E),D=i("0fec"),k=i.n(D),F=i("299f"),N=i.n(F)
    
    ,M={class:"organic-sustainable"}

    ,U={class:"organic-sustainable__description"}

    ,G=Object(r["e"])("p",{class:"screen-subtitle"},"mamada y media de tecnologia",-1)

    ,I=Object(r["e"])("h2",{class:"screen-title"},[Object(r["g"])("TECNOLOGÍAS"),Object(r["e"])("br"),Object(r["g"])("UTILIZADAS")],-1)

    ,P=Object(r["e"])("div",{class:"text-block"},[Object(r["e"])("p",null,"Resumen"),Object(r["e"])("p",null,"Parrafo mamon ")],-1)

    ,H=Object(r["e"])("div",{class:"organic-sustainable__magazine"}
    ,[Object(r["e"])("div",{class:"row"},[Object(r["e"])("div",{class:"row__text-content"},[Object(r["e"])("h4",null,"Desarrollo del modelo?"),Object(r["e"])("p",null,"Python, react Django ")])
    ,Object(r["e"])("img",{src:R.a,alt:"safeguard"})])
    ,Object(r["e"])("div",{class:"row"}
    ,[Object(r["e"])("div",{class:"row__text-content"}
    ,[Object(r["e"])("h4",null,"Motores")
    ,Object(r["e"])("p",null,"Watson IBM, motor de google, polly de amazon")])
    ,Object(r["e"])("img",{src:k.a,alt:"stability"})])
    ,Object(r["e"])("div",{class:"row"},[Object(r["e"])("div",{class:"row__text-content"},[Object(r["e"])("h4",null,"Pagina web"),Object(r["e"])("p",null,"Javascript Html CSS ?")]),Object(r["e"])("img",{src:N.a,alt:"growth"})])]
    ,-1);
    
    function X(e,t,i,n,a,o){
        var s=Object(r["m"])("learn-button");
        return Object(r["k"])()
        ,Object(r["d"])("div",M,[Object(r["e"])("div",U,[G,I,P,Object(r["h"])(s)]),H])
    }
    
    var W={
        name:"organicSustainableScreen",components:{learnButton:L},data:function(){return{}}
    };
    
    i("58f3");
    
    const z=j()(W,[["render",X]]);
    
    var V=z
    ,Y={class:"econs"}
    ,Z=Object(r["f"])('<div class="econs__description"><p class="screen-subtitle">Introducción al proyecto</p><h2 class="screen-title">Hera</h2><div class="text-block"><p>Goal de nue<br> tro proyecto </p><p>Aqui va un parrafo describiendo de que se trata nuestro proyecto y hay q profunduzar de todo este pedo.</p></div><div class="stages"><p>01</p><div class="line"></div><p>03</p></div></div>',1)
    ,K=[Z];
    
    function Q(e,t,i,n,a,o){
        return Object(r["k"])(),Object(r["d"])("div",Y,K)
    }
    
    var J={name:"econsScreen",data:function(){return{}}};
    
    i("40e9");
    
    const q=j()(J,[["render",Q]]);
    
    var $=q
    ,ee={class:"blockchain-veterans"}
    ,te={class:"blockchain-veterans__description"}
    ,ie=Object(r["e"])("h2",{class:"screen-title"}
    ,[Object(r["e"])("span",null,"frase bn")
    ,Object(r["e"])("span",null,"genial que ")
    ,Object(r["e"])("span",null,"ocupe esta misma")
    ,Object(r["e"])("span",null,"cantidad de lineas")],-1)
    ,re=Object(r["e"])("div",{class:"divider"},null,-1);
    
    function ne(e,t,i,n,a,o){
        var s=Object(r["m"])("learn-button");
        return Object(r["k"])(),Object(r["d"])("div",ee,[Object(r["e"])("div",te,[ie,re,Object(r["h"])(s)])])
    }
    
    var ae={
        name:"blockchainVeteransScreen",components:{learnButton:L},data:function(){return{}}
    };
    
    i("4344");
    
    const oe=j()(ae,[["render",ne]]);
    
    var se=oe
    ,ce=i("070d")
    ,le=i.n(ce)
    ,ue=i("19b1")
    ,de=i.n(ue)
    ,fe=i("4ec9")
    ,he=i.n(fe)
    ,ve={class:"architecture-first"}
    ,me=Object(r["e"])("div",{class:"architecture-first__description"},[Object(r["e"])("p",{class:"screen-subtitle -trAnim-1"},"Hera"),Object(r["e"])("h2",{class:"screen-title -trAnim-2"},"Aplicaciones")],-1)
    ,pe=Object(r["e"])(
        "div"
        ,{class:"architecture-first__scheme"}
        ,[Object(r["e"])(
            "div"
            ,{class:"citizens -trAnim-3"}
            ,[Object(r["e"])("div",{class:"citizens__video"}
            ,[Object(r["e"])("video",{autoplay:"",playsinline:"",muted:"",loop:"",poster:le.a},[Object(r["e"])("source",{src:de.a,type:"video/mp4"})])])
            ,Object(r["e"])("div",{class:"citizens-title"},"HEra")]
        )
        ,Object(r["e"])(
            "div"
            ,{class:"platform -trAnim-4"}
            ,[Object(r["e"])("img",{src:he.a,alt:"platform"})]
        )
        ,Object(r["e"])(
            "div"
            ,{class:"orbits"}
            ,[Object(r["e"])("div",{class:"orbit-1"})
            ,Object(r["e"])("div",{class:"orbit-2"}
            ,[Object(r["e"])("div",{class:"glass-circle"}
            ,[Object(r["e"])("div",null,"1")])
            ,Object(r["e"])("div",{class:"glass-circle"}
            ,[Object(r["e"])("div",null,"2")])])
            
            ,Object(r["e"])("div",{class:"orbit-3"}
            ,[Object(r["e"])("div",{class:"glass-circle"}
            ,[Object(r["e"])("div",null,"4")])
            ,Object(r["e"])("div",{class:"glass-circle"}
            ,[Object(r["e"])("div",null,"3")])])])],-1
    )
    ,be=[me,pe];
    
    function ge(e,t,i,n,a,o){
        return Object(r["k"])(),Object(r["d"])("div",ve,be)
    }
    var Oe={
        name:"architectureFirstScreen",data:function(){return{}}
    };
    
    i("32d5");
    
    const xe=j()(Oe,[["render",ge]]);
    
    var Ae=xe
    ,we=i("b68a")
    ,Se=i.n(we)
    ,je=i("061e")
    ,ye=i.n(je)
    ,Le=i("d46f")
    ,Te=i.n(Le)
    ,Ce={class:"architecture-second"}
    ,Be=Object(r["e"])(
        "div"
        ,{class:"architecture-second__description"}
        ,[Object(r["e"])("p",{class:"screen-subtitle -trAnim-1"},"Diagrama de despliegue UML")
        ,Object(r["e"])("h2",{class:"screen-title -trAnim-2"},"Arquitectura")
        ,Object(r["e"])(
            "div"
            ,{class:"architecture-second__scheme"}
            ,[Object(r["e"])(
                "div"
                ,{class:"architecture-second__flow-container"}
                ,[Object(r["e"])("div",{class:"gradient-block -trAnim-3"},"Hera")

                ,Object(r["e"])(
                    "div"
                    ,{class:"column"}
                    ,[Object(r["e"])(
                        "div"
                        ,{class:"glass-block block-light -trAnim-4"}
                        ,[Object(r["g"])("FrontEnd")]
                    )
                    ,Object(r["e"])("div",{class:"glass-block block-light -trAnim-5"},"Legislature")
                    ,Object(r["e"])(
                        "div"
                        ,{class:"glass-block block-light -trAnim-6"}
                        ,[Object(r["g"])("Treasure &")
                        ,Object(r["e"])("br")
                        ,Object(r["g"])("Taxation")]
                    )
                    ,Object(r["e"])("img",{src:ye.a,alt:"arrow",class:"arrow"})
                    ])
                ,Object(r["e"])(
                    "div"
                    ,{class:"column"}
                    ,[Object(r["e"])(
                        "div"
                        ,{class:"row"}
                        ,[Object(r["e"])("div",{class:"glass-block block-dark -trAnim-4"},"Planet 1"),Object(r["e"])("div",{class:"glass-block block-dark block-small -trAnim-5"},"SIDECHAIN")]
                        )
                    ,Object(r["e"])(
                        "div"
                        ,{class:"row"}
                        ,[Object(r["e"])("div",{class:"glass-block block-dark -trAnim-5"},"Planet 2"),Object(r["e"])("div",{class:"glass-block block-dark block-small -trAnim-6"},"SIDECHAIN")]
                    )
                        
                    ,Object(r["e"])(
                        "div"
                        ,{class:"row"}
                        ,[Object(r["e"])("div",{class:"glass-block block-dark -trAnim-6"},"Planet 3")
                        ,Object(r["e"])("div",{class:"glass-block block-dark block-small -trAnim-7"},"SIDECHAIN")]
                    )
                    ,Object(r["e"])(
                        "div"
                        ,{class:"row"}
                        ,[Object(r["e"])("div",{class:"glass-block block-dark -trAnim-7"},"Planet 4"),Object(r["e"])("div",{class:"glass-block block-dark block-small -trAnim-8"},"SIDECHAIN")]
                    )
                    ,Object(r["e"])(
                        "div"
                        ,{class:"row"}
                        ,[Object(r["e"])("div",{class:"glass-block block-dark -trAnim-8"},"Planet 5"),Object(r["e"])("div",{class:"glass-block block-dark block-small -trAnim-9"},"SIDECHAIN")]
                    )
                    ,Object(r["e"])("img",{src:Te.a,alt:"arrow",class:"arrow"})
                    ])
                ])
            ]
        )]
        ,-1
        )
        
    ,_e=[Be];
    
    function Ee(e,t,i,n,a,o){
        return Object(r["k"])(),Object(r["d"])("div",Ce,_e)
    }
    
    var Re={name:"architectureSecondScreen",data:function(){return{}}};
    
    i("ee0a");
    
    const De=j()(Re,[["render",Ee]]);
    
    var ke=De
    ,Fe=i("48aa")
    ,Ne=i.n(Fe)
    ,Me=i("9ca8")
    ,Ue=i.n(Me)
    ,Ge=i("31b1")
    ,Ie=i.n(Ge)
    ,Pe={class:"tech-solution"}
    ,He=Object(r["e"])("div",{class:"tech-solution__description"},[Object(r["e"])("p",{class:"screen-subtitle -trAnim-1"},"No se"),Object(r["e"])("h2",{class:"screen-title -trAnim-2"},"Tech")],-1)
    ,Xe=Object(r["e"])(
        "div"
        ,{class:"tech-solution__scheme"}
        ,[Object(r["e"])(
            "div"
            ,{class:"tech-solution__canvas"}
            ,[Object(r["e"])(
                "div"
                ,{class:"processor-block"}
                ,[Object(r["e"])("p",{class:"title -trAnim-4"},"Natural Language Processing")
                ,Object(r["e"])("img",{class:"processor -trAnim-3",src:Ne.a,alt:"processor"})
                ,Object(r["e"])(
                    "div"
                    ,{class:"processor__arrow -trAnim-4"}
                    ,[Object(r["e"])(
                        "svg"
                        ,{width:"132",height:"117",viewBox:"0 0 132 117",fill:"none",xmlns:"http://www.w3.org/2000/svg"}
                        ,[Object(r["e"])(
                            "g"
                            ,{filter:"url(#filter0_d_216_276)"}
                            ,[Object(r["e"])("path",{d:"M37.5 71.5L36 41.5L46 41L47.5 63L81.5 62.5L83 71L37.5 71.5Z",fill:"var(--color-path-1)"})
                            ,Object(r["e"])("path",{d:"M57 55.5L54.5 36.5L65 36L67 47L84.5 46.5L86 54.5L57 55.5Z",fill:"var(--color-path-2)"})
                            ,Object(r["e"])("path",{d:"M37.5 71.5L36 41.5L46 41L47.5 63L81.5 62.5L83 71L37.5 71.5Z",stroke:"black","stroke-width":"0.1"})
                            ,Object(r["e"])("path",{d:"M57 55.5L54.5 36.5L65 36L67 47L84.5 46.5L86 54.5L57 55.5Z",stroke:"black","stroke-width":"0.1"})
                            ]
                        )
                        ,Object(r["e"])(
                            "defs"
                            ,null
                            ,[Object(r["e"])(
                                "filter"
                                ,{id:"filter0_d_216_276",x:"0.947754",y:"0.947998",width:"130.112",height:"115.603",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}
                                ,[Object(r["e"])(
                                    "feFlood"
                                    ,{"flood-opacity":"0",result:"BackgroundImageFix"}
                                )
                                ,Object(r["e"])("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"})
                                ,Object(r["e"])("feOffset",{dx:"5",dy:"5"})
                                ,Object(r["e"])("feGaussianBlur",{stdDeviation:"20"})
                                ,Object(r["e"])("feComposite",{in2:"hardAlpha",operator:"out"})
                                ,Object(r["e"])("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"})
                                ,Object(r["e"])("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_216_276"})
                                ,Object(r["e"])("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_216_276",result:"shape"})
                                ]
                            )]
                        )]
                    )]
                )
                ,Object(r["e"])(
                    "div"
                    ,{class:"processor__arrow -trAnim-5"}
                    ,[Object(r["e"])(
                        "svg"
                        ,{width:"132",height:"117",viewBox:"0 0 132 117",fill:"none",xmlns:"http://www.w3.org/2000/svg"}
                        ,[Object(r["e"])(
                            "g"
                            ,{filter:"url(#filter0_d_220_281)"}
                            ,[Object(r["e"])("path",{d:"M38.9762 71L40.7619 61.9483H74.6905L76.4762 40.8276H86L84.8095 71H38.9762Z",fill:"var(--color-path-1)"})
                            ,Object(r["e"])("path",{d:"M37.7857 45.6552L36 54.7069L65.1667 55.3103L66.9524 36H56.8333L55.0476 46.8621L37.7857 45.6552Z",fill:"var(--color-path-2)"})
                            ,Object(r["e"])("path",{d:"M38.9762 71L40.7619 61.9483H74.6905L76.4762 40.8276H86L84.8095 71H38.9762Z",stroke:"black","stroke-width":"0.1"})
                            ,Object(r["e"])("path",{d:"M37.7857 45.6552L36 54.7069L65.1667 55.3103L66.9524 36H56.8333L55.0476 46.8621L37.7857 45.6552Z",stroke:"black","stroke-width":"0.1"})
                            ]
                        )
                        ,Object(r["e"])(
                            "defs"
                            ,null
                            ,[Object(r["e"])(
                                "filter"
                                ,{id:"filter0_d_220_281",x:"0.939453",y:"0.950012",width:"130.113",height:"115.1",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}
                                ,[Object(r["e"])("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"})
                                ,Object(r["e"])("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"})
                                ,Object(r["e"])("feOffset",{dx:"5",dy:"5"})
                                ,Object(r["e"])("feGaussianBlur",{stdDeviation:"20"})
                                ,Object(r["e"])("feComposite",{in2:"hardAlpha",operator:"out"})
                                ,Object(r["e"])("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"})
                                ,Object(r["e"])("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_220_281"})
                                ,Object(r["e"])("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_220_281",result:"shape"})
                                ]
                            )]
                        )]
                    )]
                )
                ]
            )
                ,Object(r["e"])(
                    "div"
                    ,{class:"processor-block"}
                    ,[Object(r["e"])("p",{class:"title -trAnim-5"},"Speech Recognition")
                    ,Object(r["e"])("img",{class:"processor -trAnim-4",src:Ne.a,alt:"processor"})
                    ,Object(r["e"])(
                        "div"
                        ,{class:"processor__arrow -trAnim-5"}
                        ,[Object(r["e"])(
                            "svg"
                            ,{width:"132",height:"117",viewBox:"0 0 132 117",fill:"none",xmlns:"http://www.w3.org/2000/svg"}
                            ,[Object(r["e"])(
                                "g"
                                ,{filter:"url(#filter0_d_216_276)"}
                                ,[Object(r["e"])("path",{d:"M37.5 71.5L36 41.5L46 41L47.5 63L81.5 62.5L83 71L37.5 71.5Z",fill:"var(--color-path-2)"})
                                ,Object(r["e"])("path",{d:"M57 55.5L54.5 36.5L65 36L67 47L84.5 46.5L86 54.5L57 55.5Z",fill:"var(--color-path-1)"})
                                ,Object(r["e"])("path",{d:"M37.5 71.5L36 41.5L46 41L47.5 63L81.5 62.5L83 71L37.5 71.5Z",stroke:"black","stroke-width":"0.1"})
                                ,Object(r["e"])("path",{d:"M57 55.5L54.5 36.5L65 36L67 47L84.5 46.5L86 54.5L57 55.5Z",stroke:"black","stroke-width":"0.1"})
                                ]
                            )
                            ,Object(r["e"])(
                                "defs"
                                ,null
                                ,[Object(r["e"])(
                                    "filter"
                                    ,{id:"filter0_d_216_276",x:"0.947754",y:"0.947998",width:"130.112",height:"115.603",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}
                                    ,[Object(r["e"])("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"})
                                    ,Object(r["e"])("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"})
                                    ,Object(r["e"])("feOffset",{dx:"5",dy:"5"})
                                    ,Object(r["e"])("feGaussianBlur",{stdDeviation:"20"})
                                    ,Object(r["e"])("feComposite",{in2:"hardAlpha",operator:"out"})
                                    ,Object(r["e"])("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"})
                                    ,Object(r["e"])("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_216_276"})
                                    ,Object(r["e"])("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_216_276",result:"shape"})
                                    ]
                                )]
                            )]
                        )]
                    )
                    ,Object(r["e"])(
                        "div"
                        ,{class:"processor__arrow -trAnim-6"}
                        ,[Object(r["e"])(
                            "svg"
                            ,{width:"132",height:"117",viewBox:"0 0 132 117",fill:"none",xmlns:"http://www.w3.org/2000/svg"}
                            ,[Object(r["e"])(
                                "g"
                                ,{filter:"url(#filter0_d_220_281)"}
                                ,[Object(r["e"])("path",{d:"M38.9762 71L40.7619 61.9483H74.6905L76.4762 40.8276H86L84.8095 71H38.9762Z",fill:"var(--color-path-2)"})
                                ,Object(r["e"])("path",{d:"M37.7857 45.6552L36 54.7069L65.1667 55.3103L66.9524 36H56.8333L55.0476 46.8621L37.7857 45.6552Z",fill:"var(--color-path-1)"})
                                ,Object(r["e"])("path",{d:"M38.9762 71L40.7619 61.9483H74.6905L76.4762 40.8276H86L84.8095 71H38.9762Z",stroke:"black","stroke-width":"0.1"})
                                ,Object(r["e"])("path",{d:"M37.7857 45.6552L36 54.7069L65.1667 55.3103L66.9524 36H56.8333L55.0476 46.8621L37.7857 45.6552Z",stroke:"black","stroke-width":"0.1"})
                                ])
                            ,Object(r["e"])(
                                "defs"
                                ,null
                                ,[Object(r["e"])(
                                    "filter"
                                    ,{id:"filter0_d_220_281",x:"0.939453",y:"0.950012",width:"130.113",height:"115.1",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}
                                    ,[Object(r["e"])("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"})
                                    ,Object(r["e"])("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"})
                                    ,Object(r["e"])("feOffset",{dx:"5",dy:"5"})
                                    ,Object(r["e"])("feGaussianBlur",{stdDeviation:"20"})
                                    ,Object(r["e"])("feComposite",{in2:"hardAlpha",operator:"out"})
                                    ,Object(r["e"])("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"})
                                    ,Object(r["e"])("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_220_281"})
                                    ,Object(r["e"])("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_220_281",result:"shape"})
                                    ]
                                )]
                            )]
                        )]
                    )
                    ]
                )
                ,Object(r["e"])(
                    "div"
                    ,{class:"processor-block"}
                    ,[Object(r["e"])(
                        "p"
                        ,{class:"title -trAnim-6"},"Text to Speech")
                        ,Object(r["e"])("img",{class:"processor -trAnim-5",src:Ue.a,alt:"processor"})
                        ,Object(r["e"])("img",{class:"processor-small -trAnim-6",src:Ie.a,alt:"processor"})
                    
                    ]
                )
                ,Object(r["e"])(
                    "div"
                    ,{class:"processor-block"}
                    ,[Object(r["e"])("p",{class:"title -trAnim-7"},"Speech to Text")
                    ,Object(r["e"])("img",{class:"processor -trAnim-6",src:Ue.a,alt:"processor"})
                    ,Object(r["e"])("img",{class:"processor-small -trAnim-7",src:Ie.a,alt:"processor"})
                    ]
                )
               
                
            ]
        )]
    ,-1)
    
    ,We=[He,Xe];
    
    function ze(e,t,i,n,a,o){
        return Object(r["k"])(),Object(r["d"])("div",Pe,We)}var Ve={name:"techSolutionScreen",data:function(){return{}}
    };
    
    i("cdf5");
    
    const Ye=j()(Ve,[["render",ze]]);
    
    var Ze=Ye
    
    ,Ke={class:"econs-solution"}
    
    ,Qe=Object(r["f"])(
        '<div class="econs-solution__description"><p class="screen-subtitle -trAnim-1">Ventajas del proyecto</p><h2 class="screen-title -trAnim-2"> ¿Por qué <br> nosotros?</h2></div><div class="econs-solution__content"><div class="text-block"><h3 class="-trAnim-3">holiwi</h3><p class="-trAnim-4">Un texto largo </p></div><div class="list"><p class="-trAnim-3"> Genera respuestas en tiempo real</p><p class="-trAnim-4">Adapatable a diferentes entornos</p><p class="-trAnim-5">Esta entrenado con circustancias reales para resolver problemas reales</p></div></div>'
    ,2)

    ,Je=[Qe];
    
    function qe(e,t,i,n,a,o){
        return Object(r["k"])(),Object(r["d"])("div",Ke,Je)
    }
    
    var $e={name:"econsSolutionScreen",data:function(){return{}}};
    
    i("e7f2");
    const et=j()($e,[["render",qe]]);
    var tt=et
    ,it={class:"token-economy"}
    ,rt={class:"token-economy__description"}
    ,nt=Object(r["e"])("p",{class:"screen-subtitle -trAnim-1"},"Solution Econs",-1)
    ,at=Object(r["e"])("h2",{class:"screen-title -trAnim-2"},[Object(r["g"])("token"),Object(r["e"])("br"),Object(r["g"])("Ecomomy")],-1)
    ,ot=Object(r["e"])("p",{class:"text-block -trAnim-3"},"There will be many planets and game worlds in the Metaverse, each with own gameplays, governance, and token economies. P12 is the top level token for the whole Metaverse",-1)
    ,st=Object(r["f"])('<div class="token-economy__slider"><div class="token-economy__sliders -trAnim-3"><div class="slide"><h4>P12 is profit-sharing token.</h4><p class="subtitle">It symbolizes the ownership of a unit piece of the Metaverse, and benefits from the growth of GDP &amp; taxation</p><ul><li>A percentage of taxation will be profit-shared with P12 starmakers</li><li>For the portion of P12 that&#39;s not staked, the corresponding the amount of P12 that should be rewarded, will be burned instead (the deflation</li><li>For the portion of P12 that’s staked, profit share will materialize during withdrawal</li></ul></div></div><div class="stages -trAnim-4"><p>01</p><div class="line"></div><p>03</p></div></div>',1);
    
    function ct(e,t,i,n,a,o){
        var s=Object(r["m"])("learn-button");
        
        return Object(r["k"])()
        ,Object(r["d"])("div",it,[Object(r["e"])("div",rt,[nt,at,ot,Object(r["h"])(s,{class:"-trAnim-4"})]),st])
    }
    
    var lt={name:"tokenEconomyScreen",components:{learnButton:L},data:function(){return{}}};
    
    i("0735");
    
    const ut=j()(lt,[["render",ct]]);
    
    var dt=ut,ft={class:"nomocracy"},ht=Object(r["f"])(
        '<div class="nomocracy__description"><div class="nomocracy__text-content"><div class="text-block -trAnim-1"><h4>Distribute by<br>usage statistics</h4><ul><li>Population Policy</li><li>Proof of Play</li></ul><div class="arrow -trAnim-2"><svg width="130" height="116" viewBox="0 0 130 116" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_260_385)"><path d="M84.9744 53.67L78.6422 58.4L59.9939 44.46L41.3321 58.4L35 53.67L59.9939 35L84.9744 53.67Z" fill="var(--color-path-1)"></path><path d="M76.1251 65.3095L69.793 70.0394L59.9936 62.7094L50.1808 70.0394L43.8486 65.3095L59.9936 53.2495L76.1251 65.3095Z" fill="var(--color-path-2)"></path></g><defs><filter id="filter0_d_260_385" x="0" y="0" width="129.975" height="115.039" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="5" dy="5"></feOffset><feGaussianBlur stdDeviation="20"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_260_385"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_260_385" result="shape"></feBlend></filter></defs></svg></div></div><div class="text-block -trAnim-2"><h4>Distribute by<br>economic activities</h4><ul><li>Turnover Tax</li><li>GDP</li></ul><div class="arrow -trAnim-3"><svg width="130" height="116" viewBox="0 0 130 116" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_260_385)"><path d="M84.9744 53.67L78.6422 58.4L59.9939 44.46L41.3321 58.4L35 53.67L59.9939 35L84.9744 53.67Z" fill="var(--color-path-1)"></path><path d="M76.1251 65.3095L69.793 70.0394L59.9936 62.7094L50.1808 70.0394L43.8486 65.3095L59.9936 53.2495L76.1251 65.3095Z" fill="var(--color-path-2)"></path></g><defs><filter id="filter0_d_260_385" x="0" y="0" width="129.975" height="115.039" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="5" dy="5"></feOffset><feGaussianBlur stdDeviation="20"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_260_385"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_260_385" result="shape"></feBlend></filter></defs></svg></div></div><div class="text-block -trAnim-3"><h4>Distribute by<br>Keynesian controls</h4><ul><li>Cold Start Impressions</li><li>Non-profit Content</li><li>Ad Unit</li></ul><div class="arrow -trAnim-4"><svg width="130" height="116" viewBox="0 0 130 116" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_260_385)"><path d="M84.9744 53.67L78.6422 58.4L59.9939 44.46L41.3321 58.4L35 53.67L59.9939 35L84.9744 53.67Z" fill="var(--color-path-1)"></path><path d="M76.1251 65.3095L69.793 70.0394L59.9936 62.7094L50.1808 70.0394L43.8486 65.3095L59.9936 53.2495L76.1251 65.3095Z" fill="var(--color-path-2)"></path></g><defs><filter id="filter0_d_260_385" x="0" y="0" width="129.975" height="115.039" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="5" dy="5"></feOffset><feGaussianBlur stdDeviation="20"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_260_385"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_260_385" result="shape"></feBlend></filter></defs></svg></div></div></div><div class="subtitle -trAnim-4"><p>Monetary Policy</p><div class="divider"></div><p>Fiscal Policy</p></div><h2 class="screen-title -trAnim-5">Equipo</h2></div>'
        
        ,1)
        
    ,vt=[ht];
    
    function mt(e,t,i,n,a,o){
        return Object(r["k"])(),Object(r["d"])("div",ft,vt)
    }
    
    var pt={name:"nomocracyScreen",data:function(){return{}}};
    
    i("339c");
    
    const bt=j()(pt,[["render",mt]]);
    
    var gt=bt
    ,Ot={class:"roadmap"}
    ,xt=Object(r["f"])(
        '<div class="roadmap__description"><h2 class="screen-title -trAnim-1">Fases del Proyecto</h2><div class="roadmap__text-content"><div class="text-block -trAnim-1"><h4>Conocimiento del Negocio</h4><p>Primer parrafo b</p></div><div class="text-block -trAnim-2"><h4>Adquisión y Comprensión de los Datos</h4><ul><li>JD</li><li>Abraham</li><li>HEnry</li></ul></div><div class="text-block -trAnim-3"><h4>Modelado - MVP</h4><ul><li>LAlo</li><li>Ruben</li><li>Ferro</li></ul></div><div class="text-block -trAnim-4"><h4>Mejora Continua y Despliegue</h4><ul><li>Monse</li><li>Luis</li></ul></div></div><div class="roadmap__progress"><svg width="2124" height="1199" viewBox="0 0 2124 1199" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M913.851 286.2C1137.16 245.082 1345.8 243.264 1502.59 273.531C1580.99 288.666 1646.38 311.812 1694.14 342.035C1741.91 372.258 1771.97 409.497 1779.94 452.814C1787.92 496.13 1773.09 541.635 1739.23 586.888C1705.36 632.143 1652.51 677.059 1584.64 719.125C1448.91 803.254 1253.31 875.871 1030 916.989C806.689 958.106 598.047 959.924 441.255 929.657C362.855 914.523 297.472 891.376 249.707 861.153C201.943 830.931 171.881 793.691 163.905 750.375C155.929 707.058 170.755 661.554 204.622 616.3C238.49 571.046 291.34 526.129 359.208 484.063C494.936 399.934 690.542 327.318 913.851 286.2Z" stroke="url(#paint0_linear_270_413)" stroke-width="2"></path><path d="M913.851 346.2C1137.16 305.082 1345.8 303.264 1502.59 333.531C1580.99 348.666 1646.38 371.812 1694.14 402.035C1741.91 432.258 1771.97 469.497 1779.94 512.814C1787.92 556.13 1773.09 601.635 1739.23 646.888C1705.36 692.143 1652.51 737.059 1584.64 779.125C1448.91 863.254 1253.31 935.871 1030 976.989C806.689 1018.11 598.047 1019.92 441.255 989.657C362.855 974.523 297.472 951.376 249.707 921.153C201.943 890.931 171.881 853.691 163.905 810.375C155.929 767.058 170.755 721.554 204.622 676.3C238.49 631.046 291.34 586.129 359.208 544.063C494.936 459.934 690.542 387.318 913.851 346.2Z" stroke="url(#paint1_linear_270_413)" stroke-width="2"></path><path d="M930.763 68.0051C1187.59 -3.49416 1434.75 -15.4404 1626.72 23.0006C1818.74 61.4539 1955.23 150.244 1991.34 279.937C2027.44 409.63 1956.47 556.173 1811.94 688.322C1667.45 820.428 1449.67 937.916 1192.84 1009.41C936.013 1080.91 688.854 1092.86 496.889 1054.42C304.863 1015.97 168.377 927.177 132.272 797.483C96.1662 667.79 167.137 521.247 311.67 389.098C456.156 256.992 673.933 139.504 930.763 68.0051Z" stroke="url(#paint2_linear_270_413)" stroke-width="2"></path><path d="M930.763 180.005C1187.59 108.506 1434.75 96.5596 1626.72 135.001C1818.74 173.454 1955.23 262.244 1991.34 391.937C2027.44 521.63 1956.47 668.173 1811.94 800.322C1667.45 932.428 1449.67 1049.92 1192.84 1121.41C936.013 1192.91 688.854 1204.86 496.889 1166.42C304.863 1127.97 168.377 1039.18 132.272 909.483C96.1662 779.79 167.137 633.247 311.67 501.098C456.156 368.992 673.933 251.504 930.763 180.005Z" stroke="url(#paint3_linear_270_413)" stroke-opacity="0.07" stroke-width="2"></path><g filter="url(#filter0_d_270_413)"><ellipse cx="987" cy="924.5" rx="17" ry="16.5" fill="white"></ellipse></g><g filter="url(#filter1_d_270_413)"><circle cx="1262.5" cy="858.5" r="13.5" fill="white"></circle></g><g filter="url(#filter2_d_270_413)"><circle cx="1498.52" cy="766.256" r="8" fill="white"></circle></g><g filter="url(#filter3_d_270_413)"><circle cx="655" cy="953" r="24" fill="white"></circle></g><g filter="url(#filter4_d_270_413)"><path d="M836.027 920.538L831.996 926.999L847.818 942.9L835.938 961.941L841.308 967.34L857.219 941.84L836.027 920.538Z" fill="var(--color-path-2)"></path><path d="M825.396 930.131L821.365 936.591L829.684 944.947L823.437 954.959L828.807 960.359L839.084 943.886L825.396 930.131Z" fill="var(--color-path-1)"></path></g><g filter="url(#filter5_d_270_413)"><path d="M1383.74 792.142L1380.87 799.195L1399.17 812.17L1390.7 832.955L1396.91 837.362L1408.25 809.524L1383.74 792.142Z" fill="var(--color-path-6)"></path><path d="M1374.9 803.405L1372.02 810.457L1381.65 817.274L1377.19 828.204L1383.4 832.61L1390.73 814.628L1374.9 803.405Z" fill="var(--color-path-5)"></path></g><g filter="url(#filter6_d_270_413)"><path d="M1119.03 873.538L1115 879.999L1130.82 895.9L1118.94 914.941L1124.31 920.34L1140.22 894.84L1119.03 873.538Z" fill="var(--color-path-4)"></path><path d="M1108.4 883.131L1104.36 889.591L1112.68 897.947L1106.44 907.959L1111.81 913.359L1122.08 896.886L1108.4 883.131Z" fill="var(--color-path-3)"></path></g><defs><filter id="filter0_d_270_413" x="955" y="895" width="64" height="63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="7.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.352941 0 0 0 0 0.294118 0 0 0 0 1 0 0 0 0.88 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_270_413"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_270_413" result="shape"></feBlend></filter><filter id="filter1_d_270_413" x="1234" y="832" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="7.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.772549 0 0 0 0 0.258824 0 0 0 0.88 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_270_413"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_270_413" result="shape"></feBlend></filter><filter id="filter2_d_270_413" x="1475.52" y="745.256" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="7.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 1 0 0 0 0 0.494118 0 0 0 0.88 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_270_413"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_270_413" result="shape"></feBlend></filter><filter id="filter3_d_270_413" x="618" y="918" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="6.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.396078 0 0 0 0 0.545098 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_270_413"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_270_413" result="shape"></feBlend></filter><filter id="filter4_d_270_413" x="786.365" y="885.538" width="115.854" height="126.802" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="5" dy="5"></feOffset><feGaussianBlur stdDeviation="20"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_270_413"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_270_413" result="shape"></feBlend></filter><filter id="filter5_d_270_413" x="1337.02" y="757.142" width="116.224" height="125.22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="5" dy="5"></feOffset><feGaussianBlur stdDeviation="20"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_270_413"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_270_413" result="shape"></feBlend></filter><filter id="filter6_d_270_413" x="1069.36" y="838.538" width="115.854" height="126.802" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="5" dy="5"></feOffset><feGaussianBlur stdDeviation="20"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_270_413"></feBlend><feBlend mode="normal"in="SourceGraphic" in2="effect1_dropShadow_270_413" result="shape"></feBlend></filter><linearGradient id="paint0_linear_270_413" x1="1056" y1="1011.5" x2="897.486" y2="350.864" gradientUnits="userSpaceOnUse"><stop stop-color="#95d9f1"></stop><stop offset="0.302083" stop-color="#15789b"></stop><stop offset="0.453602" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_270_413" x1="1029.26" y1="988.645" x2="817.797" y2="585.291" gradientUnits="userSpaceOnUse"><stop stop-color="#95d9f1"></stop><stop offset="0.302083" stop-color="#15789b"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint2_linear_270_413" x1="1224.9" y1="1096.69" x2="1034.78" y2="225.395" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.08"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint3_linear_270_413" x1="1224.9" y1="1208.69" x2="1034.78" y2="337.395" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.27"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient></defs></svg></div></div>'
         ,1
    )
         
    ,At=[xt];
    
    function wt(e,t,i,n,a,o){
        return Object(r["k"])(),Object(r["d"])("div",Ot,At)
    }
    
    var St={name:"roadmapScreen",data:function(){return{}}};
    
    i("cfbc");
    const jt=j()(St,[["render",wt]]);
    
    var yt=jt
    ,Lt={name:"screens",components:{projectTwelveScreen:_,econsScreen:$,blockchainVeteransScreen:se,architectureFirstScreen:Ae,architectureSecondScreen:ke,organicSustainableScreen:V,techSolutionScreen:Ze,econsSolutionScreen:tt,tokenEconomyScreen:dt,nomocracyScreen:gt,roadmapScreen:yt},data:function(){return{}},props:{delayedActiveScreenNumber:{type:Number,required:!0},scrollHeight:{type:Number,required:!0}},methods:{}};
    
    i("577d");
    const Tt=j()(Lt,[["render",d]]);
    
    var Ct=Tt
    ,Bt=i("cf05")
    ,_t=i.n(Bt)
    ,Et={class:"navigation-bar__offset-container"}
    ,Rt={key:0,class:"header"}
    ,Dt=Object(r["e"])("div",{class:"logo"},[Object(r["e"])("img",{src:_t.a,alt:"logo"})],-1)
    ,kt=Object(r["e"])("svg",{width:"45",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(r["e"])("path",{d:"M26.5 1.5L2 26",stroke:"white","stroke-width":"2.5","stroke-linecap":"round"}),Object(r["e"])("path",{d:"M2 1.5L26.5 26",stroke:"white","stroke-width":"2.5","stroke-linecap":"round"})],-1)
    ,Ft=[kt]
    ,Nt=["onClick"]
    ,Mt={key:1,class:"footer"}
    ,Ut=Object(r["f"])(
        '<a href="#" class="twitter"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 6.08407C30.8232 6.60524 29.5591 6.95738 28.2301 7.11655C29.6013 6.29648 30.6272 5.00577 31.1164 3.48528C29.828 4.25011 28.418 4.78847 26.9476 5.07695C25.9588 4.02175 24.6491 3.32234 23.2218 3.08732C21.7945 2.8523 20.3296 3.09481 19.0543 3.7772C17.7791 4.4596 16.7649 5.5437 16.1693 6.86118C15.5737 8.17867 15.43 9.65584 15.7604 11.0633C13.1499 10.9323 10.5961 10.2542 8.26485 9.07291C5.93354 7.89163 3.87681 6.23361 2.22813 4.20646C1.66441 5.17837 1.34026 6.30522 1.34026 7.50532C1.33963 8.58568 1.60582 9.64949 2.11522 10.6024C2.62461 11.5552 3.36145 12.3677 4.26037 12.9677C3.21787 12.9346 2.19836 12.653 1.28671 12.1465V12.231C1.2866 13.7463 1.81102 15.2149 2.77098 16.3877C3.73094 17.5605 5.06731 18.3652 6.55333 18.6654C5.58624 18.927 4.57231 18.9655 3.58813 18.778C4.0074 20.0818 4.82409 21.2219 5.92389 22.0388C7.02368 22.8556 8.35151 23.3082 9.72148 23.3333C7.39587 25.158 4.52376 26.1478 1.56716 26.1434C1.04343 26.1436 0.520146 26.113 0 26.0519C3.00111 27.9804 6.49462 29.004 10.0625 29C22.1404 29 28.7431 19.002 28.7431 10.3309C28.7431 10.0492 28.736 9.76465 28.7233 9.48294C30.0076 8.55466 31.1162 7.40516 31.9972 6.0883L32 6.08407V6.08407Z" fill="white"></path></svg></a><a href="#" class="telegram"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9076 2.17753L1.44751 13.1744C-0.426527 13.9561 -0.415685 15.0418 1.10368 15.526L8.15377 17.81L24.4656 7.12188C25.2369 6.63452 25.9416 6.8967 25.3624 7.4307L12.1465 19.8173H12.1434L12.1465 19.8189L11.6602 27.3657C12.3727 27.3657 12.6871 27.0263 13.0867 26.6258L16.511 23.1677L23.6339 28.6316C24.9473 29.3827 25.8905 28.9967 26.2173 27.3689L30.8931 4.48404C31.3717 2.49118 30.1605 1.58884 28.9076 2.17753V2.17753Z" fill="white"></path></svg></a><a href="#" class="discord"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.413 6.91825C24.4456 6.01035 22.3642 5.36525 20.2239 5C19.9573 5.47537 19.6458 6.11475 19.431 6.62341C17.1234 6.28118 14.8369 6.28118 12.5717 6.62341C12.357 6.11486 12.0385 5.47537 11.7694 5C9.62699 5.36542 7.54382 6.01216 5.57547 6.92298C1.6586 12.7607 0.596759 18.4533 1.12762 24.0653C3.72555 25.9787 6.2432 27.141 8.71844 27.9016C9.3336 27.0673 9.87738 26.184 10.3442 25.2608C9.45546 24.9271 8.59871 24.5159 7.7841 24.032C7.99847 23.8753 8.2078 23.712 8.41176 23.5423C13.3479 25.8194 18.7114 25.8194 23.5887 23.5423C23.7936 23.7108 24.0028 23.8741 24.2163 24.032C23.4003 24.5171 22.542 24.9292 21.6515 25.2632C22.1209 26.1902 22.6638 27.0743 23.2772 27.904C25.7548 27.1435 28.2748 25.9811 30.8727 24.0653C31.4957 17.5596 29.8087 11.9192 26.413 6.91813V6.91825ZM11.0167 20.614C9.53488 20.614 8.31965 19.2496 8.31965 17.5882C8.31965 15.9267 9.50899 14.56 11.0167 14.56C12.5246 14.56 13.7397 15.9243 13.7138 17.5882C13.7161 19.2496 12.5246 20.614 11.0167 20.614ZM20.9836 20.614C19.5018 20.614 18.2867 19.2496 18.2867 17.5882C18.2867 15.9267 19.4759 14.56 20.9836 14.56C22.4915 14.56 23.7066 15.9243 23.6807 17.5882C23.6807 19.2496 22.4915 20.614 20.9836 20.614V20.614Z" fill="white"></path></svg></a>',3),Gt=[Ut],It=Object(r["e"])("div",{class:"navigation-bar__active"},null
        ,-1
    );
    
    function Pt(e,t,i,n,a,o){
        var s=this;
        return Object(r["k"])()
        ,Object(r["d"])("nav",{class:Object(r["i"])(["navigation-bar",{active:i.isNavbarActive}])}
        ,[Object(r["e"])("div",Et,[Object(r["e"])(
            "div"
            ,{class:"navigation-bar__flow-container",style:Object(r["j"])({transform:"translate3d(".concat(a.navbarTranslate,"px, 0, 0)")})}
            ,[o.isMobileWidth()?(Object(r["k"])(),Object(r["d"])(
                "div"
                ,Rt
                ,[Dt,Object(r["e"])(
                    "div"
                    ,{onClick:t[0]||(t[0]=function(e){return s.$emit("closeNavbar",!1)}),class:"close"}
                    ,Ft
                )]
            ))
            :Object(r["c"])("",!0)
            ,(Object(r["k"])(!0),Object(r["d"])(
                r["a"]
                ,null
                ,Object(r["l"])(
                    a.navButtons
                    ,(function(e,t){
                        return Object(r["k"])()
                        ,Object(r["d"])(
                            "div"
                            ,{onClick:function(e){
                                return s.$emit("openScreen",o.setOpenScreenIdx(t))
                            }
                            ,key:t,class:Object(r["i"])(["nav-button",{active:a.navbarActiveScreenNumber===t}]),ref:e},[Object(r["e"])("span",null,Object(r["n"])(e),1)],10,Nt)
                    })
                ),128))
            
            ,o.isMobileWidth()?(Object(r["k"])(),Object(r["d"])("div",Mt,Gt)):Object(r["c"])("",!0)],4)]),It],2)
    }

    i("159b"),i("fb6a");

    var Ht={name:"navigationBar",data:function(){
        return{adaptivePointSm:576,scrollingTime:1e3,navbarTimmingFunction:"ease.inOut",navButtons:["Project Hera","Introducción","Sobre Nosotros","Aplicaciones","Fases","Tecnologías Utilizadas","Tecnologías Utilizadas","Arquitectura","Gap","Equipo","Otra cosa"],navbarTranslate:0,navbarAppearTimmingFunction:"ease.inOut",navbarAppearTime:500,navbarActiveScreenNumber:0}
    }
    
    ,created:function(){
        var e=this;
        this.$watch("activeScreenNumber",(function(){
            e.animateNavbarTranslate(),e.calcNavbarActiveScreenMobile()
        }))
    }
    ,mounted:function(){
        this.navbarTranslate=this.calculateNavbarTranslate()
        ,window.addEventListener("resize",function(){
            this.navbarTranslate=this.calculateNavbarTranslate()
        }
        .bind(this))
    }
    
    ,props:{activeScreenNumber:{type:Number,required:!0},isNavbarActive:{type:Boolean,required:!0}}
    
    ,methods:{
        animateNavbarTranslate:function(){
            var e=this.calculateNavbarTranslate(),t=o["a"].timeline();t.to({y:this.navbarTranslate},{
                y:e,ease:this.navbarTimmingFunction,duration:this.scrollingTime/1e3,onUpdate:function(){this.navbarTranslate=t.getChildren()[0].targets()[0].y}.bind(this),onComplete:function(){t.kill()}
            }   )
        }
        ,calculateNavbarTranslate:function(){
            var e=this,t=[],i=0;if(this.isMobileWidth())return 0;this.navButtons.forEach((function(i){
                t.push({height:e.$refs[i].getBoundingClientRect().height,marginLeft:parseInt(getComputedStyle(e.$refs[i]).marginLeft)})
            }));
            
            var r=t.slice(0,this.activeScreenNumber);
            return r.forEach((function(e){i+=e.height+e.marginLeft}))
            ,t[this.activeScreenNumber]&&(i+=t[this.activeScreenNumber].height),i
        }
        ,isMobileWidth:function(){return window.innerWidth<this.adaptivePointSm}
        
        ,animateNavbarModal:function(e,t,i){
            var r=o["a"].timeline();
            r.to({y:e},{
                y:t,ease:this.navbarAppearTimmingFunction,duration:this.navbarAppearTime/1e3,onUpdate:function(){this.navbarOpacity=r.getChildren()[0].targets()[0].y}
                .bind(this),onComplete:function(){"function"===typeof i&&i(),r.kill()}
            })
        }
        
        ,calcNavbarActiveScreenMobile:function(){
            window.innerWidth<=this.adaptivePointSm&&this.activeScreenNumber>1&&this.activeScreenNumber<=9?this.navbarActiveScreenNumber=this.activeScreenNumber-1
            :window.innerWidth<=this.adaptivePointSm&&this.activeScreenNumber>9&&this.activeScreenNumber<=12?this.navbarActiveScreenNumber=this.activeScreenNumber-2
            :window.innerWidth<=this.adaptivePointSm&&this.activeScreenNumber>12?this.navbarActiveScreenNumber=this.activeScreenNumber-3:this.navbarActiveScreenNumber=this.activeScreenNumber
        }
        
        ,setOpenScreenIdx:function(e){
            return window.innerWidth<=this.adaptivePointSm&&e>1&&e<9?(console.log(e+1),e+1)
            :window.innerWidth<=this.adaptivePointSm&&e>=9?(console.log(e+2),e+2):e
        }
    }
    };
    
    i("3855");
    
    const Xt=j()(Ht,[["render",Pt]]);
    
    var Wt=Xt
    ,zt=Object(r["e"])("div",{class:"logo"},[Object(r["e"])("img",{src:_t.a,alt:"logo"})],-1)
    
    ,Vt={class:"links"}
    
    ,Yt=["href"]
    
    ,Zt=Object(r["e"])("a",{href:"chat/",class:"button"},"Chatea Ahora",-1)
    
    ,Kt=Object(r["e"])("svg",{width:"47",height:"25",viewBox:"0 0 47 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(r["e"])("path",{d:"M45 1.42383H2",stroke:"white","stroke-width":"2.5","stroke-linecap":"round"}),Object(r["e"])("path",{d:"M45 11.8481H24.1515",stroke:"white","stroke-width":"2.5","stroke-linecap":"round"}),Object(r["e"])("path",{d:"M45 23.5752H13.7273",stroke:"white","stroke-width":"2.5","stroke-linecap":"round"})],-1)
    
    ,Qt=[Kt];
    
    function Jt(e,t,i,n,a,o){
        var s=this;
        return Object(r["k"])(),Object(r["d"])(
            "div"
            ,{style:Object(r["j"])({opacity:o.setOpacity}),class:"main-header"}
            ,[zt
                ,Object(r["e"])(
                    "div"
                    ,Vt
                    ,[(Object(r["k"])(!0),Object(r["d"])(
                        r["a"]
                        ,null
                        ,Object(r["l"])(a.links,(function(e,t){
                            return Object(r["k"])(),Object(r["d"])(
                                "a"
                                ,{key:t,href:e.href}
                                ,Object(r["n"])(e.title),9,Yt
                            )
                        }))
                        ,128)
                    )]
                )
                ,Zt
                ,Object(r["e"])(
                    "div"
                    ,{onClick:t[0]||(t[0]=function(e){
                        return s.$emit("openNavbar",!0)
                    })
                    ,class:"button-menu"
                    }
                ,Qt)
            ]
            ,4
        )
    }
    var qt={
        name:"headerBar"
        ,data:function(){
            return{
            }
        }
        ,props:{isNavbarActive:{type:Boolean,required:!0}}
        ,computed:{setOpacity:function(){return this.isNavbarActive?0:1}}
    };
    
    i("25f7");
    
    const $t=j()(qt,[["render",Jt]]);
    
    var ei=$t
    
    ,ti=(i("99af"),i("d27e"))
    ,ii=i.n(ti)
    ,ri=i("d6b7")
    ,ni=i.n(ri)
    ,ai=Object(r["e"])("video",{autoplay:"",playsinline:"",muted:"",loop:"",poster:ii.a},[Object(r["e"])("source",{src:ni.a,type:"video/mp4"})],-1)
    ,oi=[ai]
    ,si=Object(r["e"])("video",{autoplay:"",playsinline:"",muted:"",loop:"",poster:ii.a},[Object(r["e"])("source",{src:ni.a,type:"video/mp4"})],-1)
    ,ci=[si]
    ,li=Object(r["e"])("video",{autoplay:"",playsinline:"",muted:"",loop:"",poster:ii.a},[Object(r["e"])("source",{src:ni.a,type:"video/mp4"})],-1)
    ,ui=[li];
    
    function di(e,t,i,n,a,o){
        return Object(r["k"])(),Object(r["d"])(
            "div"
            ,{style:Object(r["j"])({"z-index":o.setLayerIndex()}),class:"container"}
            ,[Object(r["e"])(
                "div"
                ,{
                    class:"fluid-ball"
                    ,style:Object(r["j"])({
                        "z-index":a.ballFirst.index
                        ,transform:"translate3d(".concat(a.ballFirst.trX,"vw, ").concat(a.ballFirst.trY,"vh, 0) scale(").concat(a.ballFirst.scale,")")
                    })
                }
                ,oi
                ,4
            )
            ,Object(r["e"])(
                "div"
                ,{
                    class:"fluid-ball"
                    ,style:Object(r["j"])({
                        "z-index":a.ballSecond.index
                        ,transform:"translate3d(".concat(a.ballSecond.trX,"vw, ").concat(a.ballSecond.trY,"vh, 0) scale(").concat(a.ballSecond.scale,")")
                    })
                }
                ,ci
                ,4
            )
            
            ,Object(r["e"])(
                "div"
                ,{
                    class:"fluid-ball"
                    ,style:Object(r["j"])({
                        "z-index":a.ballThird.index
                        ,transform:"translate3d(".concat(a.ballThird.trX,"vw, ").concat(a.ballThird.trY,"vh, 0) scale(").concat(a.ballThird.scale,")")
                    })
                }
                ,ui
                ,4
                )
            ]
            ,4
            )
    }
        
    var fi={
        name:"fluidBall"
        ,props:{activeScreenNumber:{type:Number,required:!0}}
        ,data:function(){
            return{
                ballFirst:{trX:0,trY:0,scale:1,index:0}
                ,ballSecond:{trX:0,trY:0,scale:0,index:1}
                ,ballThird:{trX:0,trY:0,scale:0,index:1}
            }
        }
        ,created:function(){this.$watch("activeScreenNumber",this.ballsTranslate),this.ballsTranslate()}
        ,methods:{setLayerIndex:function(){return this.activeScreenNumber>2?-1:1}
        ,ballsTranslate:function(){
            if(window.innerWidth<576)
            return this.setBallsPosition(0,0,0,1,0,-25,10,0,1,-25,10,0,0)//o
            ,setTimeout((function(e){e.setBallsPosition(0,0,0,1,0,-25,10,.3,1,-25,10,0,0)}),1100,this)//o


            ,this.setBallsPosition(5,0,-200,1,0,-73,-8,1,1,-25,10,0,0)
            ,this.setBallsPosition(1,0,-200,0,0,0,45,1,1,-25,10,0,0)
            ,this.setBallsPosition(8,0,-200,0,0,0,-60,1.2,1,-25,10,0,0)
            ,this.setBallsPosition(3,-25,10,0,0,0,-15,1.4,0,-25,5,0,1)


            ,setTimeout((function(e){e.setBallsPosition(3,-25,10,0,0,0,-15,1.4,0,-25,5,.3,1)}),1100,this)
            ,this.setBallsPosition(7,-25,10,0,0,0,-200,1,0,0,-65,1.2,1)
            ,this.setBallsPosition(6,-25,5,0,1,0,-200,0,0,0,-15,1.4,0)


            ,setTimeout((function(e){e.setBallsPosition(6,-25,5,.3,1,0,-200,0,0,0,-15,1.4,0)}),1100,this)
            ,this.setBallsPosition(2,0,-65,1.2,1,-15,25,0,0,0,-200,1,0)
            ,this.setBallsPosition(10,25,-45,1,1,-15,25,0,0,0,-200,0,0)
            ,this.setBallsPosition(9,30,-50,1.4,1,-15,25,0,0,-15,25,0,0)
            ,this.setBallsPosition(4,30,-10,2.2,0,-10,22,0,1,-15,25,0,0)

            
            ,setTimeout((function(e){e.setBallsPosition(4,30,-10,2.2,0,-10,22,.3,1,-15,25,0,0)}),1100,this)
            ,this.setBallsPosition(11,0,-200,2.2,0,0,-65,1.2,1,-15,25,0,0)//o
            ,this.setBallsPosition(12,0,-200,0,0,30,-55,1.4,1,-15,25,0,0)//o
            ,void this.setBallsPosition(13,-15,25,0,0,0,40,2,1,-15,25,0,0);//o

            this.setBallsPosition(0,0,0,1,0,-15,25,0,1,-15,25,0,0)//o

            ,setTimeout((function(e){e.setBallsPosition(0,0,0,1,0,-15,25,.3,1,-15,25,0,0)}),1100,this)//o
            
            ,this.setBallsPosition(5,0,-200,1,0,-70,0,1,1,-15,25,0,0)
            ,this.setBallsPosition(1,0,-200,0,0,30,0,1.2,1,-15,25,0,0)
            ,this.setBallsPosition(8,-15,25,0,0,0,0,1.2,0,-15,25,0,1)
            
            ,setTimeout((function(e){e.setBallsPosition(8,-15,25,0,0,0,0,1.2,0,-15,25,.3,1)}),1100,this)
            ,this.setBallsPosition(3,-15,25,0,0,0,-200,1,0,-70,0,1,1)
            ,this.setBallsPosition(7,-15,25,0,1,0,-200,0,0,0,0,1,0)
            
            ,setTimeout((function(e){e.setBallsPosition(7,-15,25,.3,1,0,-200,0,0,0,0,1,0)}),1100,this)
            ,this.setBallsPosition(6,-70,0,1,1,-15,25,0,0,0,-200,1,0)
            ,this.setBallsPosition(2,-70,0,1,1,-15,25,0,0,0,-200,0,0)
            ,this.setBallsPosition(10,5,0,.8,1,-15,25,0,0,-15,25,0,0)
            ,this.setBallsPosition(9,0,0,1.2,0,-15,25,0,1,-15,25,0,0)


            ,setTimeout((function(e){e.setBallsPosition(9,0,0,1.2,0,-15,25,.3,1,-15,25,0,0)}),1100,this)//o
            ,this.setBallsPosition(4,0,-200,1,0,-70,0,1,1,-15,25,0,0)
        }
        ,setBallsPosition:function(e,t,i,r,n,a,o,s,c,l,u,d,f){
            if(this.activeScreenNumber===e)return this.ballFirst.trX=t,this.ballFirst.trY=i,this.ballFirst.scale=r,this.ballFirst.index=n,this.ballSecond.trX=a,this.ballSecond.trY=o,this.ballSecond.scale=s,this.ballSecond.index=c,this.ballThird.trX=l,this.ballThird.trY=u,this.ballThird.scale=d,void(this.ballThird.index=f)
        }
      }
    };
    
    i("77a3");
    
    const hi=j()(fi,[["render",di]]);
    
    var vi=hi
    
    ,mi={
        name:"App"
        ,components:{screens:Ct,navigationBar:Wt,headerBar:ei,fluidBall:vi}
        ,data:function(){
            return{
                mobileBreakpoint:576
                ,activeScreenNumber:0
                ,delayedActiveScreenNumber:-1
                ,screensCount:11
                ,screenScrollTimingFunction:"power2.inOut"
                ,screenHeight:100
                ,scrollingTime:1e3
                ,scrollHeight:0
                ,scrollingScreen:!1
                ,wheeling:!1
                ,checkingWheelingTimeout:null
                ,enableFastScrollTimeout:null
                ,isNavbarActive:!1
            }
        }
        ,mounted:function(){
            var e=new l;
            e.mouseWheel(),e.touchMove(),document.addEventListener("scroll",this.handleScroll),this.delayedActiveScreenNumber=0
        }
        ,computed:{
            newScrollHeight:function(){return this.screenHeight*this.activeScreenNumber*-1}
        }
        ,methods:{
            handleScroll:function(e){this.stopWheelingIfWheelEventStopped();
                var t=e.detail.direction,i=this.activeScreenNumber-t;
                this.setScroll(i)
            }
            ,setScroll:function(e){
                this.isEnableToScroll(e)&&(this.scrollingScreen||this.wheeling||(console.log("---\x3e scrolling!"),this.wheeling=!0,this.scrollingScreen=!0,this.activeScreenNumber=e,this.animateScrollHeight(),setTimeout(function(){this.scrollingScreen=!1,console.log("---\x3e ready to scroll")}
                .bind(this),this.scrollingTime),setTimeout(function(){
                    window.innerWidth<=this.mobileBreakpoint&&this.activeScreenNumber>1&&this.activeScreenNumber<=9?this.delayedActiveScreenNumber=this.activeScreenNumber-1:window.innerWidth<=this.mobileBreakpoint&&this.activeScreenNumber>9&&this.activeScreenNumber<=12?this.delayedActiveScreenNumber=this.activeScreenNumber-2:window.innerWidth<=this.mobileBreakpoint&&this.activeScreenNumber>12?this.delayedActiveScreenNumber=this.activeScreenNumber-3:this.delayedActiveScreenNumber=this.activeScreenNumber
                    ,console.log(this.delayedActiveScreenNumber)
                }
                .bind(this),this.scrollingTime/2),clearTimeout(this.enableFastScrollTimeout),this.enableFastScrollTimeout=setTimeout(function(){clearTimeout(this.checkingWheelingTimeout),this.wheeling=!1}.bind(this),this.scrollingTime+1200)))
            }
            
            ,isEnableToScroll:function(e){return window.innerWidth<=this.mobileBreakpoint?e>=0&&e<this.screensCount+3:e>=0&&e<this.screensCount}
            
            ,stopWheelingIfWheelEventStopped:function(){this.wheeling&&(clearTimeout(this.checkingWheelingTimeout),this.checkingWheelingTimeout=setTimeout(function(){this.wheeling=!1}.bind(this),300))}
            
            ,animateScrollHeight:function(){
                var e=o["a"].timeline();e.to({y:this.scrollHeight},{y:this.newScrollHeight,ease:this.screenScrollTimingFunction,duration:this.scrollingTime/1e3,onUpdate:function(){this.scrollHeight=e.getChildren()[0].targets()[0].y}.bind(this),onComplete:function(){e.kill()}})
            }
            ,openScreen:function(e){
                this.activeScreenNumber!==e&&this.setScroll(e)
            }
        }
    };
    
    i("843d");
    
    const pi=j()(mi,[["render",a]]);
    
    var bi=pi;
    
    i("fb98");
    
    Object(r["b"])(bi).mount("#app")

    }
    ,"577d":function(e,t,i){"use strict";i("c2c4")}
    
    ,"57aa":function(e,t,i){"use strict";i("5ef6")}
    
    ,"58f3":function(e,t,i){"use strict";i("c311")}
    
    ,"5eba":function(e,t,i){}
    
    ,"5ef6":function(e,t,i){}
    
    ,6191:function(e,t,i){}
    
    ,6730:function(e,t,i){}
    
    ,"6a8e":function(e,t,i){}
    
    ,"77a3":function(e,t,i){"use strict";i("fbf6")}
    
    ,"843d":function(e,t,i){"use strict";i("6a8e")}
    
    ,"9ca8":function(e,t,i){e.exports=i.p+"../static/img/processor-middle.ef3e2568.png"}
    
    ,a0f4:function(e,t,i){}
    
    ,af11:function(e,t,i){}
    
    ,b68a:function(e,t){
        e.exports=
        ""
    }
    
    ,c2c4:function(e,t,i){}
    
    ,c311:function(e,t,i){}
    
    ,cdf5:function(e,t,i){"use strict";i("29dc")}
    
    ,cf05:function(e,t,i){e.exports=i.p+"../static/img/Hera-logo.png"}

    ,cfbc:function(e,t,i){"use strict";i("5150")}
    
    ,d107:function(e,t,i){}
    
    ,d27e:function(e,t,i){e.exports=i.p+"../static/img/fluidBall_poster.7ab6c2bb.jpg"}
    
    ,d46f:function(e,t,i){e.exports=i.p+"../static/img/arrow-2.adbfba35.png"}
    
    ,d6b7:function(e,t,i){e.exports=i.p+"media/fluidBall.5eaed6dc.mp4"}
    
    ,df89:function(e,t,i){},e7f2:function(e,t,i){"use strict";i("df89")}
    
    ,ee0a:function(e,t,i){"use strict";i("0497")}
    
    ,fb98:function(e,t,i){}
    
    ,fbf6:function(e,t,i){}

});


//# sourceMappingURL=app.c771e51e.js.map
