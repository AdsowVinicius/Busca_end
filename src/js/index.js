const express    = require('express');
const exphbs     = require('express-handlebars');
const app        = express();
const path       = require('path');
const bodyParser = require('body-parser');
let Correios     = require('node-correios');
let correios     = new Correios();

app.use(express.static('assets'));

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`O Express está rodando na porta ${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, '../views'));
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars'); 

app.use(express.static(path.join(__dirname,'assets')));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', (req, res) => {
  let cep = req.body.cep; // Acessa o valor do CEP do corpo da requisição
  
  var erros = [];
  if (/[a-zA-Z]/.test(req.body.cep) == true) {
      erros.push({ texto: 'Não pode haver letras no CEP' });
  }
  if (!req.body.cep || typeof req.body.cep == undefined || req.body.cep == null) {
      erros.push({ texto: ' Campo CEP vazio' });
  }
  if (req.body.cep.length <= 9 && req.body.cep > 0 && req.body.cep.length < 8 ) {
      erros.push({ texto: 'CEP informado muito curto' });
  }
  if (req.body.cep.length > 9 ) {
      erros.push({ texto: 'Há muitos números no campo CEP' });
  }
  if (erros.length > 0) {
      res.render('index', { erros: erros });
  } else {
      correios.consultaCEP({ cep })
          .then(result => {
              const { logradouro, bairro, localidade, uf, cep } = result;
              res.render('submit', {
                  endereco: logradouro,
                  bairro,
                  cidade: localidade,
                  estado: uf,
                  cep,
                  errorMsg: ''
              });
          })
          .catch(error => {
              console.log(error);
              const errorMsg = 'Cep invalido ou inexistente.';
              res.render('index', { errorMsg });
          });
  }
}); 
