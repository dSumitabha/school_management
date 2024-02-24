<?php
    header("Content-Type: text/html");
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $viewPath = '../view/partials/_live_class.php';
        $scriptPath = '../setClock.js';
        if (file_exists($viewPath)) {
            $viewContent = file_get_contents($viewPath);
            echo $viewContent;
            echo '<script src="' . $scriptPath . '"></script>';
        } else {
            
            http_response_code(404);
            echo "Internal Error";
        }

    } else {
    
        http_response_code(405);
        echo "Method Not Allowed";
    }
?>