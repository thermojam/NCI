<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $info = $_POST['info'] ?? '';
    $product = $_POST['product'] ?? '';

    $arr = array(
        'Имя пользователя: ' => $name,
        'Телефон: ' => $phone,
        'Информация: ' => $info,
        'Автомобиль:'  => $product
    );

    $token = "7045152900:AAFKAv-qFJEvvHwC_zEfQCkWjmP2jWiwNPE";
    $chat_id = "-4190555114";

    $txt = '';

    foreach ($arr as $key => $value) {
        $txt .= "<b>" . $key . "</b> " . $value . "%0A";
    }

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

    if ($sendToTelegram) {
        echo '<script>alert("Ваша заявка отправлена!"); window.location.href = "index.html";</script>';
    } else {
        echo '<script>alert("Произошла ошибка при отправке заявки!"); window.location.href = "index.html";</script>';
    }
    exit;
}
?>
