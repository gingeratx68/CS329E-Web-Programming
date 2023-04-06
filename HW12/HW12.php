<head>
        <title>Homework 12</title>
        <link rel="stylesheet" type="text/css" href="HW12.css">
        <meta charset="URF-8">
        <meta name="description" content="Sign up for with names to times">
        <meta name="author" content="Ginger Hudson">
</head>

<body>
        <h1> Sign-Up Sheet</h1>
<?php
        $script = $_SERVER['PHP_SELF'];
        $myFile = fopen("signup.txt", "r");
        $signUp = [];
        //loop through every line in the file
        while(true){
            $line = fgets($myFile);
            if ($line == "") {
                break;
            }
            $signup = explode(":", $line);

            //line starts w time slot
            $time = $signup[0];
            //ends with name
            $name = $signup[1];
            $signUp[$time] = $name;
        }
        fclose($myFile);

        $times = ["8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];

        foreach($times as $t) {
            if (!empty($_POST[$t])) {
                if (array_key_exists($t, $signUp)) {
                    // Update existing sign-up information
                    $name = $_POST[$t];
                    $signUp[$t] = $name;
                    $myFile = fopen("signup.txt", "w");
                    foreach ($signUp as $time => $name) {
                        //Write in the info to register.txt file as time: name
                        fwrite($myFile, "$time:$name\n");
                    }
                    fclose($myFile);
                } else {
                    //Add the new sign up name info
                    $name = $_POST[$t];
                    $myFile = fopen("signup.txt", "a+");
                    fwrite($myFile, "$t:$name\n");
                    fclose($myFile);
                    $signUp[$t] = $name;
                }
            }
        }
?>
<form name="signupTable" method="POST" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
    <table border="1">
<?php
foreach ($times as $t) {
    echo "<tr><td>" . $t . "</td>";
    //Check if the current time slot exists in the $signUp array
    if (array_key_exists($t, $signUp)) {
        
        // If it does, add an input field to the second cell with the current name pre-filled
        echo "<td><input type='text' name='" . $t . "' value='" . $signUp[$t] . "'></td></tr>";
    } else {
        // If it doesn't, add an empty input field to the second cell
        echo "<td><input type='text' name='" . $t . "'></td></tr>";
    }
}
?>

    </table>
    <br>
    <br>
    <input id="bttn" type="submit" value="Sign-Up">
</form>

</body>
</html>