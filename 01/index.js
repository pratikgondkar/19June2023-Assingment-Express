const http = require('http');

const PORT = 3002;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to Men & Women Dummy Data');
    } else if (req.url == '/Men') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify([
            {
                id: 1,
                name: "Men's T-Shirt",
                brand: "ABC",
                Price: 19.99,
                colour:"Blue",
                Size: "M",
                category: "Clothing"
            },
            {
                id: 2,
                name: "Men's T-Shirt",
                brand: "ABC",
                Price: 19.99,
                colour:"Blue",
                Size: "M",
                category: "Clothing"
            },
            {
                id: 2,
                name: "Men's T-Shirt",
                brand: "ABC",
                Price: 19.99,
                colour:"Blue",
                Size: "M",
                category: "Clothing"
            },
            {
                id: 3,
                name: "Men's T-Shirt",
                brand: "ABC",
                Price: 19.99,
                colour:"Blue",
                Size: "M",
                category: "Clothing"
            },
            {
                id: 4,
                name: "Men's T-Shirt",
                brand: "ABC",
                Price: 19.99,
                colour:"Blue",
                Size: "M",
                category: "Clothing"
            },
            {
                id: 5,
                name: "Men's T-Shirt",
                brand: "ABC",
                Price: 19.99,
                colour:"Blue",
                Size: "M",
                category: "Clothing"
            },
            {
                id: 6,
                name: "Men's T-Shirt",
                brand: "ABC",
                Price: 19.99,
                colour:"Blue",
                Size: "M",
                category: "Clothing"
            },
            {
                id: 7,
                name: "Men's T-Shirt",
                brand: "ABC",
                Price: 19.99,
                colour:"Blue",
                Size: "M",
                category: "Clothing"
            },
            {
                id: 8,
                name: "Men's T-Shirt",
                brand: "ABC",
                Price: 19.99,
                colour:"Blue",
                Size: "M",
                category: "Clothing"
            },
            {
                id: 9,
                name: "Men's T-Shirt",
                brand: "ABC",
                Price: 19.99,
                colour:"Blue",
                Size: "M",
                category: "Clothing"
            },
            {
                id: 10,
                name: "Men's T-Shirt",
                brand: "ABC",
                Price: 19.99,
                colour:"Blue",
                Size: "M",
                category: "Clothing"
            },
        ]));
    }else if (req.url == '/Women') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify([
            {
                id: 1,
                name: "Women's T-Shirt",
                brand: "XYZ",
                Price: 10.91,
                colour:"Pink",
                Size: "S",
                category: "Clothing"
            },
            {
                id: 2,
                name: "Women's T-Shirt",
                brand: "XYZ",
                Price: 10.91,
                colour:"Pink",
                Size: "S",
                category: "Clothing"
            }, 
            {
                id: 3,
                name: "Women's T-Shirt",
                brand: "XYZ",
                Price: 10.91,
                colour:"Pink",
                Size: "S",
                category: "Clothing"
            }, 
            {
                id: 4,
                name: "Women's T-Shirt",
                brand: "XYZ",
                Price: 10.91,
                colour:"Pink",
                Size: "S",
                category: "Clothing"
            }, 
            {
                id: 5,
                name: "Women's T-Shirt",
                brand: "XYZ",
                Price: 10.91,
                colour:"Pink",
                Size: "S",
                category: "Clothing"
            }, 
            {
                id: 6,
                name: "Women's T-Shirt",
                brand: "XYZ",
                Price: 10.91,
                colour:"Pink",
                Size: "S",
                category: "Clothing"
            }, 
            {
                id: 7,
                name: "Women's T-Shirt",
                brand: "XYZ",
                Price: 10.91,
                colour:"Pink",
                Size: "S",
                category: "Clothing"
            }, 
            {
                id: 8,
                name: "Women's T-Shirt",
                brand: "XYZ",
                Price: 10.91,
                colour:"Pink",
                Size: "S",
                category: "Clothing"
            }, 
            {
                id: 9,
                name: "Women's T-Shirt",
                brand: "XYZ",
                Price: 10.91,
                colour:"Pink",
                Size: "S",
                category: "Clothing"
            }, 
            {
                id: 10,
                name: "Women's T-Shirt",
                brand: "XYZ",
                Price: 10.91,
                colour:"Pink",
                Size: "S",
                category: "Clothing"
            },  
        ]));
    }else {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page Not Found');
    }

});

server.listen(PORT, () => {
    console.log(`server running at ${HOSTNAME}:${PORT}`);
})