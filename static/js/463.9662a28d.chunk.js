"use strict";(self.webpackChunkproject_car_rental=self.webpackChunkproject_car_rental||[]).push([[463],{1943:function(n,e,i){i.d(e,{x:function(){return Z}});var r=i(9439),o=i(5705),t=i(4420),s=i(6895),a=i(2605),c=JSON.parse('{"S":["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land","Toyota","Ford","Honda","Mazda","Lincoln"],"Y":["30","40","50","60","70","80","90","100"]}'),l=i(168),d=i(7924),p=i(2013),h=i(2791);var x,g,u,b,f=i.p+"static/media/chevron-down.24cd320d509ea2ebbeb4265f8030bafb.svg",m=(0,d.ZP)(o.l0)(x||(x=(0,l.Z)(["\n  margin-top: ",";\n  margin-bottom: ",";\n  display: flex;\n  justify-content: center;\n  align-items: end;\n"])),p.r.spacing(25),p.r.spacing(25)),k=d.ZP.label(g||(g=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  color: ",";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n"])),p.r.colors.labeltext),j=(0,d.ZP)(o.gN)(u||(u=(0,l.Z)(["\n  margin-top: ",";\n  margin-right: ",";\n  padding: 14px 18px;\n  border-radius: 14px;\n  border: ",";\n  background: ",";\n  color: ",";\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.11;\n  outline: none;\n  width: 160px;\n\n  & option {\n    font-size: 16px;\n    line-height: 1.25;\n    color: ",";\n    background: ",";\n  }\n\n  &.make {\n    width: 224px;\n  }\n  &.price {\n    width: 125px;\n  }\n\n  &.make,\n  &.price {\n    cursor: pointer;\n    appearance: none;\n    overflow: hidden;\n    background: right 14px center no-repeat url(","),\n      ",";\n  }\n\n  &.left {\n    border-radius: 14px 0px 0px 14px;\n    border-right: 1px solid rgba(138, 138, 137, 0.2);\n    margin-right: 0;\n  }\n  &.right {\n    border-radius: 0px 14px 14px 0px;\n  }\n\n  &:focus {\n    caret-color: ",";\n  }\n"])),p.r.spacing(4),p.r.spacing(9),p.r.colors.bginput,p.r.colors.bginput,p.r.colors.black,p.r.colors.droptext,p.r.colors.white,f,p.r.colors.bginput,p.r.colors.dark),w=d.ZP.button(b||(b=(0,l.Z)(["\n  padding: 14px 44px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42;\n  border-radius: 12px;\n  border: transparent;\n  transition: background-color ",";\n"])),p.r.transition),v=i(184),Z=function(){var n=(0,h.useState)({isReset:!1}),e=(0,r.Z)(n,2),i=e[0],l=e[1],d=(0,t.I0)(),p=function(){l({isReset:!1})};return(0,v.jsx)(o.J9,{initialValues:{make:"",price:""},onSubmit:function(n,e){var i=e.resetForm;if(l({isReset:!0}),i())return i(),void d((0,a.go)());d((0,s.rr)(n)),d((0,a.DC)(n))},children:(0,v.jsxs)(m,{children:[(0,v.jsxs)(k,{children:["Car brand",(0,v.jsxs)(j,{component:"select",name:"make",className:"make",onClick:p,children:[(0,v.jsx)("option",{value:"default",hidden:!0,children:"Select brand"}),c.S.map((function(n){return(0,v.jsx)("option",{value:n,children:n},n)}))]})]}),(0,v.jsxs)(k,{children:["Price/ 1 hour",(0,v.jsxs)(j,{component:"select",name:"price",className:"price",onClick:p,children:[(0,v.jsx)("option",{value:"default",hidden:!0,children:"To $"}),c.Y.map((function(n){return(0,v.jsx)("option",{value:n,children:n},n)}))]})]}),(0,v.jsxs)(k,{children:["\u0421ar mileage / km",(0,v.jsx)(j,{name:"mileageFrom",placeholder:"From",className:"left"})]}),(0,v.jsx)(k,{children:(0,v.jsx)(j,{name:"mileageTo",placeholder:"To",className:"right"})}),(0,v.jsx)(w,{type:"submit",style:{backgroundColor:i.isReset?"red":"blue",color:"white",":hover":{backgroundColor:i.isReset?"yellow":"orange"}},children:i.isReset?"Reset":"Search"})]})})}},1882:function(n,e,i){i.d(e,{q:function(){return x}});var r=i(9439),o=i(4420),t=i(8020),s=i(6351),a=i(4068),c=i(2791),l=i(7609),d=i(7828),p=i(2644),h=i(184),x=function(n){var e=n.advert,i=(0,c.useState)(!1),x=(0,r.Z)(i,2),g=x[0],u=x[1],b=(0,c.useState)(null),f=(0,r.Z)(b,2),m=f[0],k=f[1],j=(0,o.I0)(),w=(0,o.v9)(s.eA).some((function(n){return n.id===e.id})),v=e.id,Z=e.year,y=e.make,P=e.model,C=e.type,z=e.img,R=e.functionalities,S=e.rentalPrice,F=e.rentalCompany,M=e.address,N=M.split(", ")[1],H=M.split(", ")[2],O=R[0].split(" ")[0];return(0,h.jsxs)(p.Zb,{children:[(0,h.jsxs)(p.bU,{children:[(0,h.jsx)(p.ZY,{onClick:function(){j(w?(0,t.Ni)(e.id):(0,t.a3)(e))},children:w?(0,h.jsx)(p.h_,{fill:"#3470FF",stroke:"#3470FF",children:(0,h.jsx)("use",{xlinkHref:"".concat(l.Z,"#icon-heart")})}):(0,h.jsx)(p.h_,{fill:"transparent",stroke:"#fff",children:(0,h.jsx)("use",{xlinkHref:"".concat(l.Z,"#icon-heart")})})}),(0,h.jsx)("img",{src:z||d,alt:y,width:274,height:268})]}),(0,h.jsxs)(p.$t,{children:[(0,h.jsxs)("p",{children:[y," ",(0,h.jsx)("span",{children:P}),", ",Z]}),(0,h.jsx)("p",{children:S})]}),(0,h.jsxs)(p.OP,{children:[(0,h.jsxs)("p",{children:[N," | ",H," | ",F]}),(0,h.jsxs)("p",{children:[C," | ",P," | ",v," | ",O]})]}),(0,h.jsx)(p.aF,{onClick:function(){return function(n){k(n),u(!0)}(e)},children:"Learn more"}),g&&(0,h.jsx)(a.i,{isOpen:g,onRequestClose:function(){k(null),u(!1)},advert:m})]})}},2644:function(n,e,i){i.d(e,{$t:function(){return f},OP:function(){return m},ZY:function(){return u},Zb:function(){return x},aF:function(){return k},bU:function(){return g},h_:function(){return b}});var r,o,t,s,a,c,l,d=i(168),p=i(2013),h=i(7924),x=h.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 274px;\n"]))),g=h.ZP.div(o||(o=(0,d.Z)(["\n  position: relative;\n  overflow: hidden;\n  width: 274px;\n  height: 268px;\n  margin-bottom: ",";\n  &::before {\n    position: absolute;\n    top: 0;\n    left: -75%;\n    z-index: 2;\n    display: block;\n    content: '';\n    width: 50%;\n    height: 100%;\n    background: -webkit-linear-gradient(\n      left,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.3) 100%\n    );\n    background: linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.3) 100%\n    );\n    -webkit-transform: skewX(-25deg);\n    transform: skewX(-25deg);\n  }\n  &:hover::before {\n    -webkit-animation: shine 0.75s;\n    animation: shine 0.75s;\n  }\n  @-webkit-keyframes shine {\n    100% {\n      left: 125%;\n    }\n  }\n  @keyframes shine {\n    100% {\n      left: 125%;\n    }\n  }\n\n  & img {\n    height: 268px;\n    width: 100%;\n    object-fit: cover;\n    object-position: center;\n    border-radius: 14px;\n    background: linear-gradient(\n        180deg,\n        rgba(18, 20, 23, 0.5) 2.5%,\n        rgba(18, 20, 23, 0) 41.07%\n      ),\n      #f3f3f2;\n  }\n"])),p.r.spacing(7)),u=h.ZP.button(t||(t=(0,d.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  border: none;\n  background: none;\n"]))),b=h.ZP.svg(s||(s=(0,d.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 18px;\n  height: 18px;\n\n  &:hover {\n    stroke: ",";\n    @keyframes shadow {\n      0% {\n        scale: 1;\n      }\n      50% {\n        scale: 1.2;\n      }\n      100% {\n        scale: 1;\n      }\n    }\n    animation: shadow 0.5s ease infinite;\n  }\n"])),p.r.colors.blue),f=h.ZP.div(a||(a=(0,d.Z)(["\n  display: flex;\n  justify-content: space-between;\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: ",";\n\n  & span {\n    color: ",";\n  }\n"])),p.r.colors.black,p.r.spacing(4),p.r.colors.blue),m=h.ZP.div(c||(c=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  & > p {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"])),p.r.spacing(2)),k=h.ZP.button(l||(l=(0,d.Z)(["\n  margin-top: ",";\n  padding: 12px 99px;\n  border-radius: 12px;\n  border: none;\n  background: ",";\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42;\n  transition: background ",";\n\n  &:is(:hover, :focus) {\n    background: ",";\n  }\n"])),p.r.spacing(14),p.r.colors.blue,p.r.colors.white,p.r.transition,p.r.colors.darkblue)},4068:function(n,e,i){i.d(e,{i:function(){return N}});var r,o,t,s,a,c,l,d,p,h=i(4942),x=i(7948),g=i.n(x),u=i(2644),b=i(7609),f=i(7828),m=i(168),k=i(2013),j=i(7924),w=j.ZP.p(r||(r=(0,m.Z)(["\n  position: relative;\n  overflow: hidden;\n  width: 460px;\n  height: 248px;\n  margin-bottom: ",";\n\n  &::before {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 2;\n    display: block;\n    content: '';\n    width: 0;\n    height: 0;\n    background: rgba(255, 255, 255, 0.2);\n    border-radius: 100%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    opacity: 0;\n  }\n\n  &:hover::before {\n    -webkit-animation: circle 0.75s;\n    animation: circle 0.75s;\n  }\n  @-webkit-keyframes circle {\n    0% {\n      opacity: 1;\n    }\n    40% {\n      opacity: 1;\n    }\n    100% {\n      width: 200%;\n      height: 200%;\n      opacity: 0;\n    }\n  }\n\n  @keyframes circle {\n    0% {\n      opacity: 1;\n    }\n    40% {\n      opacity: 1;\n    }\n    100% {\n      width: 200%;\n      height: 200%;\n      opacity: 0;\n    }\n  }\n\n  & img {\n    height: 248px;\n    width: 100%;\n    object-fit: cover;\n    object-position: center;\n    border-radius: 14px;\n    background: #f3f3f2;\n  }\n"])),k.r.spacing(7)),v=j.ZP.div(o||(o=(0,m.Z)(["\n  margin-bottom: ",";\n  color: ",";\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.33;\n\n  & span {\n    color: ",";\n  }\n"])),k.r.spacing(4),k.r.colors.black,k.r.colors.blue),Z=j.ZP.p(t||(t=(0,m.Z)(["\n  margin-top: ",";\n  margin-bottom: ",";\n  color: ",";\n  font-size: 14px;\n  line-height: 1.42;\n  max-width: 460px;\n"])),k.r.spacing(7),k.r.spacing(12),k.r.colors.black),y=j.ZP.p(s||(s=(0,m.Z)(["\n  color: ",";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.42;\n  margin-bottom: ",";\n"])),k.r.colors.black,k.r.spacing(4)),P=j.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: ",";\n  gap: ",";\n\n  & > p {\n    max-width: 460px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"])),k.r.spacing(12),k.r.spacing(2)),C=j.ZP.div(c||(c=(0,m.Z)(["\n  color: ",";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.42;\n  letter-spacing: -0.24px;\n\n  & p {\n    padding: 7px 14px;\n    display: inline-block;\n  }\n\n  & span {\n    color: ",";\n    margin-right: ",";\n  }\n"])),k.r.colors.black,k.r.colors.blue,k.r.spacing(4)),z=j.ZP.a(l||(l=(0,m.Z)(["\n  display: inline-block;\n  margin-top: ",";\n  padding: 12px 50px;\n  border-radius: 12px;\n  background: ",";\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42;\n  transition: background ",";\n\n  &:is(:hover, :focus) {\n    background: ",";\n  }\n"])),k.r.spacing(12),k.r.colors.blue,k.r.colors.white,k.r.transition,k.r.colors.darkblue),R=j.ZP.div(d||(d=(0,m.Z)(["\n  height: auto;\n  display: flex;\n  justify-content: space-between;\n  @media screen and (max-width: 767px) {\n    max-width: 256px;\n  }\n"]))),S=j.ZP.button(p||(p=(0,m.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  z-index: 10;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  border: none;\n  background: transparent;\n\n  & svg {\n    stroke: ",";\n    transition: stroke ",", scale ",";\n    scale: 0.98;\n\n    &:hover,\n    &:focus {\n      scale: 1;\n      stroke: ",";\n    }\n  }\n"])),k.r.colors.black,k.r.transition,k.r.transition,k.r.colors.darkblue),F=i(184),M={content:(0,h.Z)({top:"50%",left:"50%",right:"auto",bottom:"auto",borderRadius:"24px",marginRight:"-50%",transform:"translate(-50%, -50%)",maxWidth:"542px",maxHight:"90vh",padding:"40px",zIndex:"1300"},"@media screen and (maxWidth: 320px)","20px"),overlay:{backgroundColor:"rgba(18, 20, 23, .5)"}};g().setAppElement("#root");var N=function(n){var e=n.isOpen,i=n.onRequestClose,r=n.advert,o=r.id,t=r.year,s=r.make,a=r.model,c=r.type,l=r.img,d=r.accessories,p=r.functionalities,h=r.rentalPrice,x=r.address,m=r.fuelConsumption,k=r.engineSize,j=r.description,N=r.rentalConditions,H=r.mileage,O=x.split(", ")[1],_=x.split(", ")[2],I=N.split("\n")[1],A=N.split("\n")[2],T=H/1e3,Y=parseInt(N.match(/\d+/)),q=h.slice(1)+h[0];return(0,F.jsxs)(g(),{isOpen:e,onRequestClose:i,style:M,children:[(0,F.jsx)(R,{children:(0,F.jsx)(S,{onClick:i,children:(0,F.jsx)("svg",{width:"24",height:"24",children:(0,F.jsx)("use",{xlinkHref:"".concat(b.Z,"#icon-x")})})})}),(0,F.jsxs)("div",{children:[(0,F.jsx)(w,{children:(0,F.jsx)("img",{src:l||f,alt:s})}),(0,F.jsx)(v,{children:(0,F.jsxs)("div",{children:[s," ",(0,F.jsx)("span",{children:a}),", ",t]})}),(0,F.jsxs)(u.OP,{children:[(0,F.jsxs)("div",{children:[O," | ",_," | id: ",o," | Year: ",t," | Type: ",c]}),(0,F.jsxs)("div",{children:["Fuel Consumption: ",m," | Engine Size: ",k]})]}),(0,F.jsx)(Z,{children:j}),(0,F.jsx)(y,{children:"Accessories and functionalities:"}),(0,F.jsxs)(P,{children:[(0,F.jsxs)("p",{children:[d[0]," | ",d[1]," | ",p[0]]}),(0,F.jsxs)("p",{children:[d[2]," | ",p[1]," | ",p[2]]})]}),(0,F.jsx)(y,{children:"Rental Conditions:"}),(0,F.jsxs)(C,{children:[(0,F.jsxs)("p",{children:["Minimum age:  ",(0,F.jsx)("span",{children:Y}),"  ",I]}),(0,F.jsxs)("p",{children:[A," Mileage: ",(0,F.jsx)("span",{children:T}),"  Price:  ",(0,F.jsx)("span",{children:q})]})]}),(0,F.jsx)(z,{href:"tel:+380730000000",children:"Rental car"})]})]})}},7828:function(n,e,i){n.exports=i.p+"static/media/no-image.92ec54143a1808558646.png"}}]);
//# sourceMappingURL=463.9662a28d.chunk.js.map