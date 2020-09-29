<?php
$folders = scandir(__dir__);
$links   = '';
foreach ($folders as $folder) {
    if (!in_array($folder, array(
        '.index.php.swp',
        'index.php',
        'plugins',
        '.',
        '..',
        'interference',
        'img',
        'assets'
    ))) {
        $links .= '<hr><h1>' . $folder . '</h1><hr>';
        $indexes = scandir(__dir__ . '/' . $folder);
        foreach ($indexes as $i) {
            if (!in_array($i, array(
                '..',
                '.'
            ))) {
                $links .= "\t--<a href=\"/{$folder}/{$i}\" target=\"_blank\">{$i}</a><br>";
            }
        }
    }
}
echo $links;





