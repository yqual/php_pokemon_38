/*----------------------------------------------------------
// 初期化する関数
----------------------------------------------------------*/
/**
* 技テーブルクリック時の関数
* @function click
* @return void
**/
var clickMoveInit = function(){
    $('.move-table-row').click(function(){
        // 技をフォームへセット
        $('#fight-form-param').val($(this).data('key'));
        // サブミット実行
        $('#fight-form').submit();
    });
}


/*----------------------------------------------------------
// 処理内で呼び出す関数
----------------------------------------------------------*/


/*----------------------------------------------------------
// 初期化
----------------------------------------------------------*/
jQuery(function($){
    clickMoveInit();
});