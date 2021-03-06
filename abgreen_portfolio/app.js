const sections = ['home','about','projects','contact']
const quote = '“Everything you can imagine is real.” - Pablo Picasso'

let $navList = $('<ul>').addClass('navbar-nav mr-auto')

sections.forEach((section, i) => {
    // add section to site
    let $div = $(`<div id="${section}" class="section"></div>`)
    if (i > 0) {
        $div.append(`<h1>${section}</h1>
                    <div class="section-frame section-top"></div>
                    <div id="${section}-content" class="section-content"></div>
                    <div class="section-frame section-bottom"></div>`)
    }
    $('main').append($div)

    // add section name to navbar
    let $li = $(`<li class="nav-item">
                    <a class="nav-link" href="#${section}">${section}</a>
                </li>`)
    $navList.append($li)
    
    // test to see if user is currently viewing this section
    $(window).scroll(() => {
        let viewTop = $(window).scrollTop()
        let divTop = $div.offset().top
        let gap = .4 * $(window).height()
        if (viewTop > divTop - gap && viewTop < divTop + $div.height() - gap) {
            $div.css('opacity', 1)
            $li.addClass('active')
        }
        else {
            $div.css('opacity', .5)
            $li.removeClass('active')
        }
     })
})
$('#navbarSupportedContent').append($navList)

// make footer only appear when site is scrolled completely up or down
$(window).scroll(() => {
    $footer = $('footer')
    if($(window).scrollTop() + $(window).height() === $(document).height() || $(window).scrollTop() === 0) {
        $footer.css('bottom', 0)
    }
    else {
        $footer.css('bottom', -$footer.height())
    }
 })

let $quote = $('<p>').html(quote)
let $footer = $('footer')

// quote only added to footer if screen width is larger than mobile
$(window).width() > 768 ? $footer.append($quote) : ''

// dynamically determine whether to add or remove quote from footer
$(window).resize(() => {
    if ($(window).width() <= 768) {
        $quote.detach()
    } else {
        $footer.append($quote)
    }
})