<?php
$data = $_GET["data"];

$fp = fopen("miike.json", "w");
fwrite($fp, $data);
fclose($fp);
?>
