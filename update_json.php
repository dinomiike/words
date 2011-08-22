<?php
$file = $_POST["file"];
$data = $_POST["data"];

if ($file == "" || $data == "") {
	echo "invalid request from the words form";
	exit();
}

$fp = fopen("js/".$file, "w");
fwrite($fp, $data);
fclose($fp);
?>
