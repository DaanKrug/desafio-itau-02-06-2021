var tab = 0;
var headers = ['tabheader0','tabheader1','tabheader2'];
var panels = ['tab0','tab1','tab2'];
var buttons = ['previousButton','nextButton','submitButton'];
var fields = [
	['name','cpf'],
	['address','number'],
	['cellphone'],
];
function nextTab(){
	document.getElementById('errorcontainer').style.display = 'none';
	if(!validateFields()){
		document.getElementById('errorcontainer').style.display = 'block';
		return;
	}
	if(tab > 1){
		var form = document.forms[0];
		var object = {
			nome: form.name.value,
			cpf: form.cpf.value,
			rg: form.rg.value,
			genero: form.genre.value,
			endereco: form.address.value,
			numero: form.number.value,
			bairro: form.neighborhood.value,
			cidade: form.city.value,
			uf: form.uf.value,
			cep: form.cep.value,
			fone_fixo: form.phone.value,
			fone_celular: form.cellphone.value,
		};
		var json = JSON.stringify(object);
		alert(json);
		return;
	}
	tab ++;
	setTabs();
}
function previousTab(){
	if(tab < 1){
		return;
	}
	tab --;
	setTabs();
}
function setTabs(){
	var size = headers.length;
	for(var i = 0; i < size; i++){
		if(i == tab){
			document.getElementById(headers[i]).className = 'header tabheader active';
			document.getElementById(panels[i]).className = 'tabpanel';
			continue;
		}
		document.getElementById(headers[i]).className = 'header tabheader disabled';
		document.getElementById(panels[i]).className = 'tabpanel none';
	}
	if(tab == 0){
		document.getElementById(buttons[0]).className = 'disabled';
		document.getElementById(buttons[1]).className = 'active';
		document.getElementById(buttons[2]).className = 'none';
	}
	if(tab == 1){
		document.getElementById(buttons[0]).className = 'active';
		document.getElementById(buttons[1]).className = 'active';
		document.getElementById(buttons[2]).className = 'none';
	}
	if(tab == 2){
		document.getElementById(buttons[0]).className = 'active';
		document.getElementById(buttons[1]).className = 'none';
		document.getElementById(buttons[2]).className = 'active';
	}
}
function validateFields(){
	var fieldIds = fields[tab];
	var size = fieldIds.length;
	var countErrors = 0;
	for(var i = 0; i < size; i++){
		var element = document.getElementById(fieldIds[i]);
		element.className = '';
		if(element.value.trim() == ''){
			element.className = 'error';
			countErrors ++;
		}
	}
	return countErrors == 0;
	
}







