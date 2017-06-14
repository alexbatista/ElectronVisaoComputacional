const {dialog} = require('electron').remote
var fs = require('fs');

$(function(){
  $(document).ready(function(){
  var path = '';
  var errorFlag = false;
  $('#fileToSend').on('click',function(){
    path = dialog.showOpenDialog({title:"Selecione a imagem",properties: ['openFile'],filters:[{name: 'Images', extensions: ['jpg', 'png', 'gif']}]});
    $(this).val(path);
  });
  $('.start').on('click',function() {
    if($("#fileToSend").val() != ""){
      console.log(path);
      $("#loading").css("display","block");
      $(".form").css("display","none");
    	var ps = require('child_process').spawn('./documentScanner',
         // second argument is array of parameters, e.g.:
         [path]);

    	ps.stdout.on('data', (data) => {
    	  console.log(data);
    	});

    	ps.stderr.on('data', (data) => {
    	  console.log(`ps stderr: ${data}`);
        if(data == 'error'){
          errorFlag = true;
          console.log("Erro ao carregar a imagem");
          $('#error').modal();
        }
    	});

    	ps.on('close', (code) => {
    	  if (code !== 0) {
    		console.log(`ps process exited with code ${code}`);
        $('#error').modal();
        }else{
          if(errorFlag == false){
            cam = dialog.showSaveDialog(function(filename){
              fs.rename("./out.txt", filename.replace(".txt","").concat(".txt"), function (err) {
                if (err) throw err
                console.log('Successfully renamed - AKA moved!')
              });
            });
            $('#success').modal();
          }
        }
        $("#loading").css("display","none");
        $(".form").css("display","block");
        errorFlag = false;
    	});
    }else{
      $("#selectFileModal").modal();
    }
  });


  });
});
