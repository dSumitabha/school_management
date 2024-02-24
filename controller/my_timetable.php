<?php
    header("Content-Type: text/html");
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $viewPath = '../view/partials/_my_timetable.php';
        if (file_exists($viewPath)) {
            $viewContent = file_get_contents($viewPath);
            
            echo $viewContent;
        } else {
            
            http_response_code(404);
            echo "Internal Error";
        }

    } else {
    
        http_response_code(405);
        echo "Method Not Allowed";
    }
?>