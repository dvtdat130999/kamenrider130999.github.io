
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
            title: "Đăng ký tham quan công ty Fujinet Systems ngày 11/11",
            date: "14/12/2020",
            summary: "Công ty Cổ phần Fujinet Systems (Fujinet) là công ty phát triển phần mềm cho thị trường Nhật Bản hàng đầu tại Việt Nam. Fujinet đã gặt hái nhiều thành công và ngày càng khẳng định thương hiệu được vị trí, thương hiệu của mình ở thị trường trong và nước ngoài bằng các giải thưởng uy tín trong ngành CNTT",
            link: "../detailNotiStudentPage/index.html",
            view: 52626
        },
        {
            title: "Đăng ký tham quan công ty VNG ngày 16/1",
            date: "07/12/2020",
            thumbnail: "../images/search-thumbnail-1.jfif",
            summary: "Thời gian tham quan: 9g00 - 11g15 ngày 16/11/2020 (Thứ hai) Địa chỉ công ty: VNG Campus,đường số 13, khu Công Nghiệp, Khu Chế Xuất Tân Thuận, phường Tân Thuận Đông, Quận 7 Phương tiện: có xe đưa đón (tập trung tại cơ sở Nguyễn Văn Cừ vào 8g00 để lên xe)",
            link: "../detailNotiStudentPage/index.html",
            view: 83636
        },
        {
            title: 'Đăng ký tham dự hội thảo "Kỹ năng giao tiếp hiệu quả"',
            date: "03/12/2020",
            thumbnail: "../images/search-thumbnail-5.jfif",
            summary: "87.5% nhà tuyển dụng và IT leaders tham gia khảo sát năm 2017 (topITworks), khẳng định rằng kỹ năng giao tiếp góp phần quan trọng trong thành công nghề nghiệp của kỹ sư lập trình.",
            link: "../detailNotiTeacherPage/index.html",
            view: 12563
        },
        {
            title: "Đăng ký tham quan công ty FAST ngày 4/2",
            date: "03/01/2021",
            summary: "Thời gian tham quan: 9g00 - 10g30 ngày 4/12 (Thứ sáu) Địa chỉ công ty: Số 29, đường số 18, khu phố 4, phường Hiệp Bình Chánh, quận Thủ Đức Phương tiện: có xe đưa đón (tập trung tại cơ sở Nguyễn Văn Cừ vào 8g00 để lên xe)",
            link: "../detailNotiStudentPage/index.html",
            view: 9672
        },
        {
            title: 'Đăng ký tham dự hội thảo "Kỹ năng làm việc nhóm trong môi trường IT" ngày 2/2',
            date: "01/01/2021",
            thumbnail: "../images/search-thumbnail-2.jfif",
            summary: 'Nhằm giúp sinh viên trang bị những kỹ năng cần thiết, Khoa Công nghệ Thông tin, Trường Đại học Khoa học Tự nhiên phối hợp cùng Công ty FPT Software tổ chức Hội thảo với chủ đề: "Kỹ năng làm việc nhóm trong môi trường IT".',
            link: "../detailNotiStudentPage/index.html",
            view: 2626
        },
        {
            title: "Đăng ký nhận lễ phục và tập trung Lễ tốt nghiệp ngày 29/2/2020",
            date: "15/01/2021",
            thumbnail: "../images/search-thumbnail-4.jfif",
            summary: "Thời gian tập trung ngày trao bằng tại Giảng đường 1: 7g30, ngày 29/11/2020 các bạn vui lòng tập trung ở cửa vào Giảng đường 1 để điểm danh. những bạn nào không tập trung đúng giờ để điểm danh sẽ không được xướng tên nhận bằng.",
            link: "../detailNotiTeacherPage/index.html",
            view: 6361
        }    ,
        {
            title: "Thông báo đăng ký tham dự Lễ tốt nghiệp ngày 29/2/2021",
            date: "05/01/2021",
            summary: "Thời gian tập trung ngày trao bằng tại Giảng đường 1: 7g30, ngày 29/11/2020 các bạn vui lòng tập trung ở cửa vào Giảng đường 1 để điểm danh. những bạn nào không tập trung đúng giờ để điểm danh sẽ không được xướng tên nhận bằng.",
            link: "../detailNotiStudentPage/index.html",
            view: 2871
        },
        {
            title: "Đăng ký tham quan Zalo ngày 11/2",
            date: "03/01/2021",
            thumbnail: "../images/search-thumbnail-1.jfif",
            summary: "Tại Việt Nam, nếu bạn sở hữu 1 chiếc điện thoại thông minh, chắc hẳn bạn từng nhắn tin qua Zalo, cập nhật tin tức trên Báo Mới hay sử dụng bàn phím tiếng Việt Laban Key. Zalo - tổ chức công nghệ hàng đầu Việt Nam",
            link: "../detailNotiStudentPage/index.html",
            view: 9286
        },
        {
            title: 'Thông báo đăng ký cuộc thi "Hành trình Sống đẹp" do PNJ phối hợp cùng Quỹ Thời báo Kinh tế Sài Gòn (STF) tổ chức.',
            date: "11/01/2021",
            thumbnail: "../images/search-thumbnail-3.jfif",
            summary: "Không cần những bộ hồ sơ “hoành tráng” hay bảng thành tích với những con số “khủng”, săn học bổng chưa bao giờ dễ đến thế với tổng giá trị giải thưởng lên đến hơn 250 triệu đồng.",
            link: "../detailNotiTeacherPage/index.html",
            view: 9252
        },
        {
            title: 'Đăng ký tham dự Hội thảo chủ đề "Clean code" ngày 18/1',
            date: "25/12/2020",
            summary: 'Nhằm giúp sinh viên trang bị những kỹ năng cần thiết, Khoa Công nghệ Thông tin, Trường Đại học Khoa học Tự nhiên phối hợp cùng Công ty DEK Technologies tổ chức Hội thảo với chủ đề: "Clean code".',
            link: "../detailNotiStudentPage/index.html",
            view: 26176
        },
        {
            title: "Đăng ký tham quan công ty TIKI ngày 28/1",
            date: "31/12/2020",
            thumbnail: "../images/search-thumbnail-5.jfif",
            summary: "09:00 AM - 09:20 AM Tập trung các bạn sinh viên Ăn sáng nhẹ	 09:20 AM - 09:40 AM HR Sharing	",
            link: "../detailNotiStudentPage/index.html",
            view: 2412
        },
        {
            title: 'Đăng ký tham dự hội thảo "Kỹ năng làm việc nhóm trong môi trường IT" ngày 21/1',
            date: "03/01/2021",
            thumbnail: "../images/search-thumbnail-4.jfif",
            summary: 'Nhằm giúp sinh viên trang bị những kỹ năng cần thiết, Khoa Công nghệ Thông tin, Trường Đại học Khoa học Tự nhiên phối hợp cùng Công ty FPT Software tổ chức Hội thảo với chủ đề: "Kỹ năng làm việc nhóm trong môi trường IT".',
            link: "../detailNotiTeacherPage/index.html",
            view: 32515
        },
        {
            title: 'Đăng ký tham gia Hội thảo "Kỹ năng tổ chức & quản lý thời gian"',
            date: "04/01/2021",
            summary: 'Nhằm giúp sinh viên trang bị những kỹ năng cần thiết, Khoa Công nghệ Thông tin, Trường Đại học Khoa học Tự nhiên phối hợp cùng Công ty FPT Telecom tổ chức Hội thảo với chủ đề: "Kỹ năng tổ chức & quản lý thời gian".',
            link: "../detailNotiStudentPage/index.html",
            view: 6453
        },
        {
            title: "Mở đăng ký Chương trình Postdoctoral Networking Tour in Artificial Intelligence 04/2021 - Cơ quan Trao đổi Hàn lâm Đức khu vực Hà Nội",
            date: "06/01/2021",
            thumbnail: "../images/search-thumbnail-3.jfif",
            summary: "Chương trình Postdoctoral Networking Tour in Artificial Intelligence 04/2021 dành cho các nghiên cứu sinh sau Tiến sĩ do Cơ quan Trao đổi Hàn lâm Đức khu vực Hà Nội (DAAD Regional Office in Hanoi) tổ chức.",
            link: "../detailNotiStudentPage/index.html",
            view: 2143
        },
        {
            title: "[CQ] DSSV nộp đơn đăng ký bảo vệ/ huỷ bảo vệ KLTN/TTTN/ĐATN khóa 2017, đợt 1 (bảo vệ tháng 3/2021)",
            date: "11/01/2021",
            summary: "Các bạn xem DSSV nộp đơn đăng ký bảo vệ/ huỷ bảo vệ đề tài Khoá luận/ Thực tập/ Đồ án tốt nghiệp đợt 1 (bảo vệ tháng 3/2021) trong file đính kèm.",
            link: "../detailNotiTeacherPage/index.html",
            view: 3625
        }    ,
        {
            title: "[CQ] DSSV nộp đơn đăng ký thực hiện KLTN/TTTN/ĐATN khóa 2017, đợt 2 (bảo vệ tháng 7/2021)",
            date: "11/01/2021",
            summary: "Các bạn xem danh sách nộp đơn đăng ký thực hiện Khóa luận tốt nghiệp/ Thực tập tốt nghiệp/ Đồ án tốt nghiệp Khóa 2017 - Đợt 2 (bảo vệ tháng 7/2021) tại file đính kèm.",
            link: "../detailNotiStudentPage/index.html",
            view: 1232
        },
        {
            title: "[CD] Thông báo đăng ký học phần HK2/2020-2021 - bậc cao đẳng",
            date: "07/01/2021",
            thumbnail: "../images/search-thumbnail-2.jfif",
            summary: "Khoa CNTT thông báo đến tất cả sinh viên bậc cao đẳng hệ chính quy khóa tuyển 2018 về việc đăng ký qua mạng các học phần trong học kỳ 2 năm học 2020-2021 như sau:",
            link: "../detailNotiStudentPage/index.html",
            view: 2425
        },
        {
            title: "Đăng ký ứng tuyển học bổng công ty TNHH ScrumViet",
            date: "10/01/2021",
            thumbnail: "../images/detail-notification-image-2.png",
            summary: "Với mong muốn đóng góp một phần nhỏ vào việc phát triển giáo dục ở Việt Nam và đặc biệt cho ngành công nghệ thông tin - Công ty TNHH ScrumViet.",
            link: "../detailNotiTeacherPage/index.html",
            view: 2324
        },
        {
            title: "Thông báo đăng ký học phần cho sinh viên bậc Cao đẳng HK1 2020-2021",
            date: "07/12/2020",
            summary: "Khoa CNTT thông báo đến tất cả các sinh viên bậc cao đẳng hệ chính quy khóa tuyển 2018 trở về trước về việc đăng ký học phần qua mạng HK1 2020-2021. Sinh viên chú ý theo dõi và đăng ký theo đúng lịch trường đã sắp xếp...",
            link: "../detailNotiStudentPage/index.html",
            view: 2525
        },
        {
            title: "Thông báo nộp đơn đăng ký Thực hiện Khóa luận tốt nghiệp/Thực tập tốt nghiệp/Đồ án tốt nghiệp Khóa 2017 - Đợt 2 (Online)",
            date: "08/01/2021",
            thumbnail: "../images/detail-notification-image-1.png",
            summary: "BP Giáo vụ thông báo các bạn sinh viên đã được Giảng viên Doanh nghiệp nhận thực hiện đề tài tốt nghiệp trong đợt đăng ký Thực hiện Khóa luận tốt nghiệp/Thực tập tốt nghiệp/Đồ án tốt nghiệp Khóa 2017 - Đợt 2 ... Chương trình chính quy.",
            link: "../detailNotiStudentPage/index.html",
            view: 1212
        },
        {
            title: "[CQ] Thông báo đăng ký học phần dành cho sinh viên Đại học Chính quy HK2/2020-2021  ",
            date: "09/01/2021",
            thumbnail: "../images/search-thumbnail-1.jfif",
            summary: "Khoa CNTT thông báo đến tất cả sinh viên hệ Đại học Chính quy về việc đăng ký qua mạng các học phần trong học kỳ 2, năm học 2020-2021 như sau:",
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