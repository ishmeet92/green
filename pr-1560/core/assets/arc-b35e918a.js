import{w as ln,c as J}from"./path-53f90ab3.js";import{D as rn,E as N,F as D,G as an,H as y,I as on,J as z,K as _,L as un,M as t,N as sn,O as tn,P as fn}from"./architecture-68e88fcd.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,O,E,v,A,K,r){var q=O-l,i=E-h,n=K-v,m=r-A,a=m*q-n*i;if(!(a*a<y))return a=(n*(h-A)-m*(l-v))/a,[l+a*q,h+a*i]}function W(l,h,O,E,v,A,K){var r=l-O,q=h-E,i=(K?A:-A)/z(r*r+q*q),n=i*q,m=-i*r,a=l+n,s=h+m,f=O+n,c=E+m,L=(a+f)/2,o=(s+c)/2,p=f-a,g=c-s,R=p*p+g*g,T=v-A,P=a*c-f*s,F=(g<0?-1:1)*z(fn(0,T*T*R-P*P)),G=(P*g-p*F)/R,H=(-P*p-g*F)/R,w=(P*g+p*F)/R,d=(-P*p+g*F)/R,x=G-L,e=H-o,u=w-L,M=d-o;return x*x+e*e>u*u+M*M&&(G=w,H=d),{cx:G,cy:H,x01:-n,y01:-m,x11:G*(v/T-1),y11:H*(v/T-1)}}function vn(){var l=cn,h=yn,O=J(0),E=null,v=gn,A=mn,K=pn,r=null,q=ln(i);function i(){var n,m,a=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-an,c=A.apply(this,arguments)-an,L=un(c-f),o=c>f;if(r||(r=n=q()),s<a&&(m=s,s=a,a=m),!(s>y))r.moveTo(0,0);else if(L>on-y)r.moveTo(s*N(f),s*D(f)),r.arc(0,0,s,f,c,!o),a>y&&(r.moveTo(a*N(c),a*D(c)),r.arc(0,0,a,c,f,o));else{var p=f,g=c,R=f,T=c,P=L,F=L,G=K.apply(this,arguments)/2,H=G>y&&(E?+E.apply(this,arguments):z(a*a+s*s)),w=_(un(s-a)/2,+O.apply(this,arguments)),d=w,x=w,e,u;if(H>y){var M=sn(H/a*D(G)),B=sn(H/s*D(G));(P-=M*2)>y?(M*=o?1:-1,R+=M,T-=M):(P=0,R=T=(f+c)/2),(F-=B*2)>y?(B*=o?1:-1,p+=B,g-=B):(F=0,p=g=(f+c)/2)}var S=s*N(p),j=s*D(p),C=a*N(T),Q=a*D(T);if(w>y){var U=s*N(g),V=s*D(g),X=a*N(R),Y=a*D(R),I;if(L<rn)if(I=dn(S,j,X,Y,U,V,C,Q)){var Z=S-I[0],$=j-I[1],k=U-I[0],b=V-I[1],nn=1/D(tn((Z*k+$*b)/(z(Z*Z+$*$)*z(k*k+b*b)))/2),en=z(I[0]*I[0]+I[1]*I[1]);d=_(w,(a-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}F>y?x>y?(e=W(X,Y,S,j,s,x,o),u=W(U,V,C,Q,s,x,o),r.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),r.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(r.moveTo(S,j),r.arc(0,0,s,p,g,!o)):r.moveTo(S,j),!(a>y)||!(P>y)?r.lineTo(C,Q):d>y?(e=W(C,Q,U,V,a,-d,o),u=W(S,j,X,Y,a,-d,o),r.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,a,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),r.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):r.arc(0,0,a,T,R,o)}if(r.closePath(),n)return r=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-rn/2;return[N(m)*n,D(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:J(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:J(+n),i):h},i.cornerRadius=function(n){return arguments.length?(O=typeof n=="function"?n:J(+n),i):O},i.padRadius=function(n){return arguments.length?(E=n==null?null:typeof n=="function"?n:J(+n),i):E},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:J(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:J(+n),i):A},i.padAngle=function(n){return arguments.length?(K=typeof n=="function"?n:J(+n),i):K},i.context=function(n){return arguments.length?(r=n??null,i):r},i}export{vn as a};
