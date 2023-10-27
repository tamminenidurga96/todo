$("#add").click(function(){
    let myTask = $("#task").val();
    if (myTask) {
       $("#tasklist").append(`<li>${myTask}<button class="edit">edit</button> <button class="delete">Delete</button></li>`);

    }
    $("#task").val("")

    $("#tasklist").on("click", ".delete",function(){

        $(this).parent().remove()
    })

    $("#tasklist").on("click", ".edit", function(){

        let listItem = $(this).parent()
        let taskText = listItem.text()
        let output = taskText.split("")
        let currentTask = output[0]

        $("#task").val(currentTask)

        $(this).text("update").attr("class", "update")
        $(".update").click(function(){
            let updatedTask = $("#task").val()
            $(this).parent().html(`<li>${updatedTask}<button class="edit">edit</button> <button class="delete">Delete</button></li>`);
            $("#task").val("")
        })




    })

 });
 