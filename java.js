function consola(){
    x=dato1.value;
	y=Number(dato3.value);
	w=Number(dato4.value);
    pap=10;
    cho=10;
    dor=10;
    pap1="papitas"
    cho1="chocolatina(s)"
    dor1="doritos"
    pap2=0
    cho2=0
    dor2=0

if (x=='P') {
	total=y*3500;

	if (w>=total && y<=10 && pap2<=0) {
		devuelta=w-total;
		pap2=pap-y
		lolito.innerHTML="<center>Hola, pediste: "+pap1+" en cantidad de: "+y+" y tu devuelta es de: "+devuelta+"<br> las cantidades restantes de cada producto son las siguientes:<br>papitas="+pap2+"<br>Chocolatinas="+cho+"<br>Doritos="+dor+" </center";

	}
	else{
		lolito.innerHTML="<center>hola, la compra no se pudo realizar debido a que pediste una cantidad mayor a 10 o tienes dinero insuficiente para pagar</center";
	}


}



if (x=='C') {
	total=y*2500;

	if (w>=total && y<=10 && pap2<=0) {
		devuelta=w-total;
		cho2=cho-y
		lolito.innerHTML="<center>Hola, pediste: "+cho1+" en cantidad de: "+y+" y tu devuelta es de: "+devuelta+"<br> las cantidades restantes de cada producto son las siguientes:<br>papitas="+pap+"<br>Chocolatinas="+cho2+"<br>Doritos="+dor+" </center";
	}
	else{
		lolito.innerHTML="<center>hola, la compra no se pudo realizar debido a que pediste una cantidad mayor a 10 o tienes dinero insuficiente para pagar</center";
	}
	

}



if (x=='D') {
	total=y*1500;

	if (w>=total) {
		devuelta=w-total;
		dor2=dor-y
		lolito.innerHTML="<center>Hola, pediste: "+dor1+" en cantidad de: "+y+" y tu devuelta es de: "+devuelta+"<br> las cantidades restantes de cada producto son las siguientes:<br>papitas="+pap+"<br>Chocolatinas="+cho+"<br>Doritos="+dor2+" </center";
	}
	else{
lolito.innerHTML="<center>hola, la compra no se pudo realizar debido a que pediste una cantidad mayor a 10 o tienes dinero insuficiente para pagar</center";
	}



}





}
