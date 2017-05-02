var express = require('express');
var app = express(); 
var router = express.Router(); 
var bodyParser = require('body-parser')

var menus = [{'id':0,'name':'affogato','url':"images/affogato.jpg",'price': 57}, 
          		{'id':1, 'name':'americano','url':"images/americano.jpg",'price': 69},
                {'id':2, 'name':'capuchino','url':"images/capuchino.jpg",'price': 98},
          		{'id':3, 'name':'espresso_con_panna','url':"images/espresso_con_panna.jpg",'price': 85},
                {'id':4, 'name':'espresso_macchiato','url':"images/espresso_macchiato.jpg",'price': 93},
                {'id':5, 'name':'espresso','url':"images/espresso.jpg",'price': 55},
                {'id':6, 'name':'latte','url':"images/latte.jpg",'price': 87},
                {'id':7, 'name':'mocca','url':"images/mocca.jpg",'price': 79}
          ]

var tmp = []


app.use(express.static('public'))


router.route('/projects') 	  
    .get(function(req, res) { 
    	res.json(menus);
    })

router.route('/projects2') 	  
    .get(function(req, res) { 
    	res.json(tmp);
    })


router.route('/projects/:project_id')
	.get(function(req,res) {
    	res.json(menus[req.params.project_id])
    })

    .post(function(req, res) {
    	var id = req.params.project_id
		tmp.push(menus[id])
		res.json({message : 'Success'})
	})

	.put (function(req,res) {
		var id = req.params.project_id
		tmp.push(menus[id]);
        res.json({ message: 'project updated!' });        
     })

	.delete(function(req,res) {
		var id = req.params.project_id
		delete 	tmp[id]
        res.json({ message: 'project deleted!' });
    })
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' }) 
});

app.post('/co',function(req,res){
res.render('public/boostrap/cal.html',{
});
});
app.use('/api', bodyParser.json(), router);  
 
app.use("*",function(req,res){
  res.status(404).send('404 Not found');
});

app.listen(9999, function() {
	console.log("Server is running")
});