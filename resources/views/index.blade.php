<!DOCTYPE html>
<html dir="rtl">
<head>
    <meta charset="utf-8">
    <title></title>
    <link href="css/fonts/font-awesome.css" rel="stylesheet">
    <link href="css/admin/app.css" rel="stylesheet">
</head>
<script>
    window.Laravel = <?php echo json_encode([
	'csrfToken' => csrf_token(),
]); ?>
</script>
    <script>
        //See https://laracasts.com/discuss/channels/vue/use-trans-in-vuejs
        window.trans = @php
            // copy all translations from /resources/lang/CURRENT_LOCALE/* to global JS variable
            $lang_files = File::files(resource_path() . '/lang/' . App::getLocale());
            $trans = [];
            foreach ($lang_files as $f) {
                $filename = pathinfo($f)['filename'];
                $trans[$filename] = trans($filename);
            }
            $trans['adminlte_lang_message'] = trans('adminlte_lang::message');
            echo json_encode($trans);
        @endphp
    </script>
<body class="sidebar-expanded">
<div id="app"></div>
<!-- built files will be auto injected -->
<script src="js/admin/app.js"></script>
</body>
</html>

