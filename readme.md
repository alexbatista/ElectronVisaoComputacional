# DocumentScanner
### Visão Computacional - UFAL 2016.2
***

##### Dependências do projeto

Para execução correta do projeto, será necessário a instalação dos seguintes pacotes:
* [opencv](http://opencv.org/) incluindo os módulos extras [opencv_contrib](https://github.com/opencv/opencv_contrib).
* [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) - Para leitura dos caracteres
* [NodeJS](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04) (Instalar também o NPM, conforme tutorial do link)

##### Instalação e configuração das dependências do projeto

###### Tesseract
Na Wiki do repositório do Tesseract no github, há um guia para sua instalação. Os passos podem ser vistos [neste link do github](https://github.com/tesseract-ocr/tesseract/wiki/Compiling) e também [neste link do github](https://github.com/tesseract-ocr/tesseract/wiki).

[Extra: Tutorial de instalação no ubuntu](https://www.webuildinternet.com/2016/06/28/installing-opencv-with-tesseract-text-module-on-ubuntu/)

`Atenção!! O tesseract possui um repositório tessdata, onde estão disponíveis dados de treinamento do tesseract para diversas linguagens.Esses arquivos serão utilizados para fazer o reconhecimento dos caracteres. Baixe o pacote referente a linguagem desejada e copie para a pasta indicada no tutorial.`
###### Opencv + opencv_contrib
Ao instalar o opencv, lembre-se de também instalar os pacotes extras juntos.

###### NodeJS
A instalação do NodeJS e npm pode ser feita de diversas maneiras. O tutorial [deste link](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04) apresenta uma solução fácil, através do comando apt-get.

```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```
###### Execução do projeto

Para executar o projeto, execute os seguintes comandos na pasta do projeto:

```
$ npm install
```
e após a conclusão do comando, execute:

```
$ npm start
```

![](/readme/doc1.png)

Na janela acima, selecione a imagem que deseja extrair o texto e então presione o botão **Gerar Texto**.
![](/readme/doc2.png)

O programa então fará uma leitura da imagem e tentará extrair o texto. Se tudo ocorrer bem, no fim do processamento, aparecerá a seguinte mensagem:
![](/readme/doc3.png)

No entanto, caso ocorra alguma erro, a imagem abaixo é apresentada:
![](/readme/doc4.png)

Por fim, o programa possui uma área de dicas para a escolha da imagem. Para ver as dicas, clique no botão **MAIS DICAS** e a seguinte janela será exibida:
![](/readme/doc5.png)


## License

MIT ©
