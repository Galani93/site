
$(document).ready(function () {

    $("#datatable").DataTable(), $(document).ready(function () {
        $("#datatable2").DataTable()
    }), $("#datatable-buttons").DataTable({
        lengthChange: !1,
        buttons: ["copy", "excel", "pdf", "colvis"]
    }).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"), $("#row_callback").DataTable({
        createdRow: function (t, a, e) {
            15e4 < 1 * a[5].replace(/[\$,]/g, "") && $("td", t).eq(5).addClass("highlight")
        }
    });




    var updateTableArr = [
        "#child_rows1",
        "#child_rows2",
        "#child_rows3",
    ];
    var updateTable = function ($id) {
        var e = $($id).DataTable({
            data: testdata.data,
            select: "single",
            columns: [{
                className: "details-control",
                orderable: !1,
                data: null,
                defaultContent: ""
            }, {data: "name"}, {data: "position"}, {data: "office"}, {data: "salary"},{data: "extn2"},{data: "extn3"}],
            order: [[1, "asc"]]
        });
        $($id +" tbody").on("click", "td.details-control", function () {
            var t = $(this).closest("tr"), a = e.row(t);
            a.child.isShown() ? (a.child.hide(), t.removeClass("shown")) : (a.child(format(a.data())).show(), t.addClass("shown"))
        });
    };

    updateTableArr.map(updateTable);



    function format(t) {
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
            '<tr>' +
            '<td>Չափաբաժին</td>' +
            '<td>' + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>Անվանում</td>" +
            "<td>" + t.name  + "</td>" +
            "</tr>" +
            "<" + "tr>" +
            "<td>Քանակ</td>" +
            "<td></td>" +
            "</tr>" +
            "<tr>" +
            "<td>Չափման միավոր</td>" +
            "<td></td>" +
            "</tr>" +
            "<tr>" +
            "<td>Նախահաշիվ</td>" +
            "<td></td>" +
            "</tr>" +
            "</table>"
    }

})

var testdata = {
    data: [{
        name: "ՋԿ-ՄԱԱՇՁԲ-19/8",
        position: "կուտակիչներ, չվերալիցքավորվող և գալվանական մարտկոցներ",
        salary: "",
        start_date: "2019-11-25 18:26:48",
        office: "2019-11-03 02:24:58",
        extn: "0",
        extn2: "Ավարտված",
        extn3: "0",
    }, {
        name: "ՋԿ-ՄԱԱՇՁԲ-19/6",
        position: "կուտակիչներ, չվերալիցքավորվող և գալվանական մարտկոցներ",
        salary: "",
        start_date: "2019-11-25 18:26:48",
        office: "2019-11-03 02:24:58",
        extn: "0",
        extn2: "Չկայացած",
        extn3: "0",
    }, {
        name: "ՋԿ-ՄԱԱՇՁԲ-19/4",
        position: "կուտակիչներ, չվերալիցքավորվող և գալվանական մարտկոցներ",
        salary: "",
        start_date: "2019-11-25 18:26:48",
        office: "2019-11-03 02:24:58",
        extn: "0",
        extn2: "Ավարտված",
        extn3: "0",
    }]
};



