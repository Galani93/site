$(function () {
    $("#makeEditable").SetEditable({$addButton: $("#but_add")}), $("#submit_data").on("click", function () {
        var t = TableToCSV("makeEditable", ",");
        console.log(t);
        var e = t.split("\n"), l = [];
        for (i = 0; i < e.length; i++) l[i] = e[i].split(",");
        for (i = 0; i < l.length; i++) 1 < l[i] && (console.log(l[i][2]), console.log(l[i].length))
    })
}), $("#mainTable").editableTableWidget().numericInputExample().find("td:first").focus();