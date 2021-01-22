
$(document).ready(function () {
    const $searchResultList = $('#searchResultList');
    const $sortDropdownMenu = $('#sortDropdownMenu');
    const $filterFromDate = $('#filterFromDate');
    const $filterToDate = $('#filterToDate');
    const $searchMorePagination = $('#searchMorePagination');
    const $moreResultSearchInp = $('#moreResultSearchInp');
    const $moreResultSearchSubmit = $('#moreResultSearchSubmit');
    const $filterErrorMsg = $('#filterErrorMsg');

    $filterFromDate.val((new Date("2020-12-03")).toISOString().substr(0, 10));
    $filterToDate.val((new Date).toISOString().substr(0, 10));
    let key = localStorage.getItem("key");

    if (key) {
        document.getElementById("moreResultSearchInp").value = key;
    } else {
        key = "Đăng ký";
    }

    // 0: Date DESC
    // 1: Date ASC
    // 2: Popularity DESC
    let sortOption = 0;
    const allArticles = [
        {
            title: "Đăng ký học bổng VIETHOPE năm học 2020-2021 dành cho Tân Sinh viên khóa 2020",
            date: "14/12/2020",
            summary: "Đối tượng dự tuyển Tân Sinh viên năm 2020; Có nhu cầu cần hỗ trợ chi phí học tập: có hoàn cảnh kinh tế gia đình khó khăn, thu nhập gia đình không đủ trang trải các khoản chi phí liên quan đến việc học tập; Thành tích học tập khá, giỏi;",
            link: "../detailNotiStudentPage/index.html",
            view: 52626
        },
        {
            title: "Thông báo đăng ký học bổng Mitsubishi UFJ Foundation năm 2020",
            date: "03/01/2021",
            thumbnail: "../images/search-thumbnail-5.jfif",
            summary: "Đối tượng dự tuyển Sinh viên khóa 2017 hoặc 2018, có tư cách đạo đức tốt Sinh viên có điểm trung bình năm học 2019-2020 từ 8.0 trở lên, ưu tiên các sinh viên đã nhận học bổng Mitsubishi UFJ Foundation năm học 2019-2020;Điểm rèn luyện học kì 1 năm học 2019-2020 từ 80 điểm trở lên;",
            link: "../detailNotiStudentPage/index.html",
            view: 9286
        },
        {
            title: "Thông báo đăng ký học bổng ACECOOK HAPPY SCHOLARSHIP",
            date: "11/01/2021",
            thumbnail: "../images/search-thumbnail-2.jfif",
            summary: "Với mong muốn đóng góp một phần nhỏ vào việc phát triển giáo dục ở Việt Nam và đặc biệt cho ngành công nghệ thông tin - Công ty TNHH ACECOOK.",
            link: "../detailNotiTeacherPage/index.html",
            view: 9252
        },
        {
            title: "Thông báo đăng ký học bổng của công ty WILLOGY (AI & ROBOTICS) năm 2021",
            date: "25/12/2020",
            summary: "Willogy (https://willogy.io) là công ty khởi nghiệp công nghệ dịch vụ và xây dựng giải pháp, sản phẩm chuyên về Artificial Intelligence (AI) và Robotics. Công ty được thành lập bởi các nhà nghiên cứu và kỹ sưđã từng là kỹ sư trưởng",
            link: "../detailNotiStudentPage/index.html",
            view: 26176
        },
        {
            title: "Thông tin đăng ký Giải thưởng HONDA năm 2021",
            date: "11/01/2021",
            thumbnail: "../images/search-thumbnail-1.jfif",
            summary: "Nhằm khuyến khích và nâng cao tinh thần học tập, góp phần tích cực vào sự phát triển toàn diện của các bạn sinh viên, đồng thời đóng góp cho sự phát triển của nền giáo dục nước nhà cũng như sự phát triển của đất nước Việt Nam", 
            link: "../detailNotiTeacherPage/index.html",
            view: 3625
        },
        {
            title: "Thông tin đăng ký chương trình KIT - Japan Online Spring School 2021",
            date: "06/01/2021",
            summary: "Nhà trường có nhận được thông tin về chương trình KIT - Japan Online Spring School 2021 của Viện Kỹ thuật Kyoto, Nhật Bản - Đối tượng tham gia: sinh viên năm 2,3,4 ngành Công nghệ thông tin và Công nghệ sinh học- Số lượng: 10 sinh viên, mỗi ngành 5 sinh viên.",
            link: "../detailNotiStudentPage/index.html",
            view: 1232
        },
        {
            title: "KMS FRESHER - Đăng ký trở thành Nhân viên chính thức tại KMS với đầy đủ phúc lợi từ ngày đầu tiên",
            date: "07/01/2021",
            thumbnail: "../images/search-thumbnail-4.jfif",
            summary: "Vị trí Fresher tại KMS với full quyền lợi của một nhân viên chính thức ngay từ ngày đầu tiên, cơ hội dành cho các bạn sinh viên IT năm 3-4 và mới tốt nghiệp, làm việc tại Tp. Hồ Chí Minh hoặc Đà Nẵng.",
            link: "../detailNotiStudentPage/index.html",
            view: 2425
        },
        {
            title: "Đăng ký học bổng POSCO TJ Park Foundation năm 2021",
            date: "10/01/2021",
            thumbnail: "../images/search-thumbnail-3.jfif",
            summary: "Đối tượng dự tuyển Sinh viên đại học hệ chính quy khóa 2017 hoặc 2018, có tư cách đạo đức tốt; Sinh viên có điểm trung bình học kì 2 năm học 2018-2019 và học kì 1 năm học 2019-2020 từ 8.5 trở lên, không có môn học thi lại; Điểm rèn luyện học kì 1 năm học 2019-2020 từ 80 điểm trở lên;",
            link: "../detailNotiTeacherPage/index.html",
            view: 2324
        },
        {
            title: "[FUJINET] Đăng ký Fresher Web Developers",
            date: "07/01/2021",
            summary: "Fujinet - là công ty phát triển phần mềm cho thị trường Nhật Bản hàng đầu tại Việt Nam, với gần hơn 800 kỹ sư đang làm việc tại Việt Nam và hơn 50 kỹ sư onsite tại Fujinet Japan Nhật Bản.",
            link: "../detailNotiStudentPage/index.html",
            view: 2626
        },
        {
            title: "[VNG] Đăng ký ứng tuyển chương trình VNG Tech Fresher 2021",
            date: "07/01/2021",
            summary: "VNG Tech Fresher đang tìm kiếm ứng viên là: - Sinh viên khá giỏi ngành CNTT tại TP.HCM, tốt nghiệp năm 2021 & 2022- Nắm vững kiến thức về cấu trúc dữ liệu, thuật toán và ngôn ngữ lập trình- Có tư duy logic, thái độ cầu tiến ",
            link: "../detailNotiStudentPage/index.html",
            view: 2525
        },
        {
            title: "Công ty Goldeneye Technologies mở đăng ký tuyển dụng Back-end/ Front-end Internship",
            date: "08/01/2021",
            thumbnail: "../images/search-thumbnail-1.jfif",
            summary: "Vị trí Back-end Internship và Front-end Internship tại Goldeneye Technologies đang được mở dành cho các bạn sinh viên năm 3, năm cuối hoặc vừa mới tốt nghiệp các chuyên ngành công nghệ thông tin, làm việc tại Thành phố Hồ Chí Minh.",
            link: "../detailNotiStudentPage/index.html",
            view: 1212
        },
        {
            title: "Đăng ký ứng tuyển học bổng công ty TNHH ScrumViet",
            date: "12/01/2021",
            thumbnail: "../images/detail-notification-image-2.png",
            summary: "Với mong muốn đóng góp một phần nhỏ vào việc phát triển giáo dục ở Việt Nam và đặc biệt cho ngành công nghệ thông tin - Công ty TNHH ScrumViet.",
            link: "../detailNotiTeacherPage/index.html",
            view: 969
        }                
    ];

    let page = 0;
    const perPage = 10;

    let displayedArtciles = [...allArticles];

    const sortArticles = (articles) => {
        switch(sortOption){
            case 0:
                sortByDateDesc(articles);
                break;
            case 1:
                sortByDateAsc(articles);
                break;
            case 2:
                sortByPopularityDesc(articles);
                break;
            default:
                sortByDateDesc(articles);
                break;
        }
    }
    const sortByDateAsc = (articles) => {
        articles.sort(compareDateAsc);
    }

    const sortByDateDesc = (articles) => {
        articles.sort(compareDateDesc);
    }

    const sortByPopularityDesc = (articles) => {
        articles.sort(comparePopularityDesc);
    }

    const compareDateAsc = (art1, art2) => {
        return (new Date(art1.date.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"))).getTime() - (new Date(art2.date.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"))).getTime();
    }

    const compareDateDesc = (art1, art2) => {
        return (new Date(art2.date.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"))).getTime() - (new Date(art1.date.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"))).getTime();
    }

    const comparePopularityDesc = (art1, art2) => {
        return art2.view - art1.view;
    }

    const filterByDate = (dateStr, fromStr, toStr) => {
        let from = 0;
        if (fromStr){
            from = new Date(fromStr);
            from.setHours(0, 0, 0, 0);
            from = from.getTime();
        }
        let to = (new Date(toStr));
        to.setHours(0, 0, 0, 0);
        to = to.getTime();
        const today = (new Date(dateStr.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"))).getTime();
        return today >= from && today <= to;

    }

    $moreResultSearchInp.on("keypress", (e) => {
        //e.preventDefault();
        if(e.keyCode == 13) {
            $moreResultSearchSubmit.click();
        }
    });

    $moreResultSearchSubmit.on('click', (e) => {
        const key = $moreResultSearchInp.val();
        localStorage.setItem("key", key);
        const path =
        localStorage.getItem("homepage-github") != true ? "../" : "/tkgd-2020/";
        const link =
        key.toLowerCase() === "đăng ký"
            ? `${path}searchPage/index.html`
            : `${path}searchNotFoundPage/index.html`;
    
        window.open(link, "_self");
    })

    const renderResult = (articles, keyword) => {
        if (articles.length == 0){
            $filterErrorMsg.show();
            $searchResultList.empty();
        } else {
            $filterErrorMsg.hide();
            $searchResultList.empty();
            for (let i = page * perPage, count = 0; i < articles.length && count < perPage; i++, count++){
                let article = articles[i];
                const keywordRegex = new RegExp(keyword, "gi");
                let title = article.title.replace(keywordRegex, (matching) => {
                    return `<span class="searchResult-number" style="color: red; font-style: italic;"><u>${matching}&nbsp;</u></span>`
                });
                const $li = $('<li class="py-4"></li>');
                const $h6 = $(`<h6 class="article-title"></h6>`);
                const $h6a = $(`<a href=${article.link}>${title}</a>`);
                $h6.append($h6a);
                $li.append($h6);

                const $row = $('<div class="row"></div>');
                const $date = $(`<div class="col-md-2 article-date my-0" style="font-size: 0.9rem; color: rgba(0,0,0,0.5)"><u>${article.date}</u></div>`);
                if (article.thumbnail){
                    const $thumbnail = $(`<div class="search-article-thumbnail"><img src="${article.thumbnail}" /></div>`);
                    $date.prepend($thumbnail);
                }
                const $content = $(`<div class="col-md-10 article-content py-2" style="font-size: 0.9rem; color: rgba(0,0,0,0.5)"><p>${article.summary}</p></div>`)
                $row.append($date, $content);

                $li.append($row);
                $searchResultList.append($li);
            }        
            renderPagination(page, displayedArtciles);
        }
    }

    $('#sortByDateDesc').on('click', (e) => {
        sortOption = 0;
        sortArticles(displayedArtciles);
        renderResult(displayedArtciles, key);

        $sortDropdownMenu.text($(e.target).text());
    })

    $('#sortByDateAsc').on('click', (e) => {
        sortOption = 1;
        sortArticles(displayedArtciles);
        renderResult(displayedArtciles, key);

        $sortDropdownMenu.text($(e.target).text());
    })

    $('#sortByPopularity').on('click', (e) => {
        sortOption = 2;
        sortArticles(displayedArtciles);
        renderResult(displayedArtciles, key);

        $sortDropdownMenu.text($(e.target).text());
    })

    $filterFromDate.on('change', (e) => {
        displayedArtciles = allArticles.filter((article) => filterByDate(article.date, $filterFromDate.val(), $filterToDate.val()));
        page = 0;
        sortArticles(displayedArtciles);
        renderResult(displayedArtciles, key);
    })

    $filterToDate.on('change', (e) => {
        displayedArtciles = allArticles.filter((article) => filterByDate(article.date, $filterFromDate.val(), $filterToDate.val()));
        page = 0;
        sortArticles(displayedArtciles);
        renderResult(displayedArtciles, key);
    })

    const renderPagination = (localPage, data) => {
        $searchMorePagination.empty();
        const count = Math.ceil(data.length / perPage);
        const $first = $('<a href="#"><li><<</li></a>');
        $first.on('click', (e) => {
            page = 0;
            renderResult(displayedArtciles, key);
        })
        const $last = $('<a href="#"><li>>></li></a>');
        $last.on('click', (e) => {
            page = count - 1;
            renderResult(displayedArtciles, key);
        })
        $searchMorePagination.append($first);
        for (let i = 0; i < count; i++){
            let $a;
            if (i === localPage){
                $a = $(`<a class="is-active" href="#"><li>${i + 1}</li></a>`);
            } else {
                $a = $(`<a href="#"><li>${i + 1}</li></a>`);
            }
            $a.on('click', (e) => {
                page = i;
                renderResult(displayedArtciles, key);
            })
            $searchMorePagination.append($a);
        }
        $searchMorePagination.append($last);
    }

    renderResult(displayedArtciles, key);

    $('#sortByDateDesc').click();
    $('#searchResultCount').text(allArticles.length);

})