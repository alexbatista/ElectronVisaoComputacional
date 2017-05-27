const {dialog} = require('electron').remote

$(function(){
  $(document).ready(function(){
  var path = '';
  $('#fileToSend').on('click',function(){
    path = dialog.showOpenDialog({title:"Selecione a imagem",properties: ['openFile'],filters:[{name: 'Images', extensions: ['jpg', 'png', 'gif']}]});
    $(this).val(path);
  });
  $('.start').on('click',function() {
  console.log(path);
  $("#loading").css("display","block");
	var ps = require('child_process').spawn('./documentScanner',
     // second argument is array of parameters, e.g.:
     [path]);

	ps.stdout.on('data', (data) => {
	  console.log(data);
	});

	ps.stderr.on('data', (data) => {
	  console.log(`ps stderr: ${data}`);
    if(data == 'error'){
      console.log("Erro ao carreegar a imagem");
      $('#error').modal();
    }
	});

	ps.on('close', (code) => {
	  if (code !== 0) {
		console.log(`ps process exited with code ${code}`);
    $('#error').modal();
    }else{
      $("#loading").css("display","none");
      $('#myModal').modal();
    }
	});

  });


  });
});