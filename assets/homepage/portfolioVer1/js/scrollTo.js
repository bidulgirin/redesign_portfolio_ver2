$(function () {
  $("#menu a").click(function () {
    $("body").scrollTo($(this).attr("href"), 500)
    return false
  })
  $("#headerNav a").click(function () {
    $("body").scrollTo($(this).attr("href"), 500)
    return false
  })
  $(".swimming").click(function () {
    $("body").scrollTo($(this).attr("href"), 500)
    return false
  })
  $("h6 a").click(function () {
    $("body").scrollTo($(this).attr("href"), 500)
    return false
  })

  $("#topM a").click(function () {
    $("body").scrollTo($(this).attr("href"), 500)
    return false
  })
})
