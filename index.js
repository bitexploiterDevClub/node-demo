
let express = requie('express');
let app = express();

// Home Entry
app.get('/', (req, res) => {
  res.send('FUNCIONAAA');
});

// I Want to Buy Papas
app.get('/papas', (req, res) => {
    res.json("No Hay PAPA");
});

// Pedir el inventario
app.get('/papas/inventario', (req, res) => {
    res.json(
        { 
            "inventario": 20, 
            "proximaDisponibilad": '',
            'precio': 1600
        }
    );
});

// Comprar Papas
app.get('/papas/comprar', (req, res) => {
    
    let precioBase = 1500;

    if(req.query.precio < precioBase) {
        
        res.json(
            {
                "error": true,
                "descripcion": "Mijo no me da no me da, oferte mas"   
            }
        )

    } else {
        res.json("Juega Juega");
    }

   res.json(req.query.cantidad);
});

app.listen(80, function () {
  console.log('Example app listening on port 3000!');
});

