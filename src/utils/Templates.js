const templateConfirm = `<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Confirmación de Pedido</title>
        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .confirmation-container {
            width: 80%;
            margin: 20px auto;
            background-color: #fff;
            padding: 30px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .confirmation-container h1 {
            color: #4CAF50;
        }
        .order-details, .customer-details {
            margin-top: 30px;
        }
        .order-details table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        .order-details table th, .order-details table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        .order-details table th {
            background-color: #f2f2f2;
        }
        .order-summary {
            margin-top: 20px;
            float: right;
            width: 40%;
        }
        .order-summary table {
            width: 100%;
            border-collapse: collapse;
        }
        .order-summary table td {
            padding: 8px;
            text-align: right;
        }
        .order-summary table tr.total td {
            font-weight: bold;
            font-size: 1.1em;
        }
        .actions {
            margin-top: 40px;
            text-align: center;
        }
        .actions .btn {
            display: inline-block;
            text-decoration: none;
            background-color: #4CAF50;
            color: #fff;
            padding: 12px 20px;
            margin: 5px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .actions .btn:hover {
            background-color: #45a049;
        }
        @media (max-width: 768px) {
            .order-summary {
                width: 100%;
                float: none;
            }
        }
    </style>
    </head>
    <body>
        <div class="confirmation-container">
            <h1>¡Gracias por tu compra!</h1>
            <p>Tu pedido ha sido confirmado exitosamente.</p>

            <div class="order-details">
                <h2>Detalles del Pedido</h2>
                <p><strong>Número de Pedido:</strong> #123456789</p>
                <p><strong>Fecha:</strong> 25 de octubre de 2024</p>

                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Producto A</td>
                            <td>1</td>
                            <td>$50.00</td>
                            <td>$50.00</td>
                        </tr>
                        <tr>
                            <td>Producto B</td>
                            <td>2</td>
                            <td>$30.00</td>
                            <td>$60.00</td>
                        </tr>
                    </tbody>
                </table>

                <div class="order-summary">
                    <table>
                        <tr>
                            <td>Subtotal:</td>
                            <td>$110.00</td>
                        </tr>
                        <tr>
                            <td>Envío:</td>
                            <td>$5.00</td>
                        </tr>
                        <tr class="total">
                            <td>Total:</td>
                            <td>$115.00</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="customer-details">
                <h2>Información del Cliente</h2>
                <p><strong>Nombre:</strong> Juan Pérez</p>
                <p><strong>Dirección de Envío:</strong> Calle Principal 123,
                    Ciudad, País</p>
                <p><strong>Método de Pago:</strong> Tarjeta de Crédito
                    (Visa)</p>
            </div>

            <div class="actions">
                <a href="https://www.youtube.com/" class="btn">Continuar Comprando</a>
                <a href="https://www.youtube.com/" class="btn">Rastrear mi pedido</a>
            </div>
        </div>
    </body>
</html>`

module.exports = {
    templateConfirm
}