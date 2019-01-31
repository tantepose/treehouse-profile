(function () {

    // render header
    const profile_name = document.getElementById("name");
    profile_name.innerText = profile.name;

    // render skills
    const profile_skills = document.getElementById("skills");
    const skills = profile.points;
    var skills_html = "";

    for (var skill in skills) { 
        if (skills[skill] > 0) { // skip skills with 0 points
            
            if (skill != "total") { // skip "total" skill
                skills_html += 
                    "<li><p>" +
                        skill + ": " + skills[skill] + 
                    "</p></li>";
            }
        }
    }

    profile_skills.innerHTML = skills_html; // render results

    // render badges
    const profile_badges = document.getElementById("badges");
    const badges = profile.badges;
    var badges_html = "";

    for (var badge in badges) {
        if (badges[badge].name != "Newbie") { // skip "newbie" badge
            
            // get courses within badge
            var course_list = "";
            for (var course in badges[badge].courses) {
                course_list += badges[badge].courses[course].title + ", ";
            }
    
            const badge_name = badges[badge].name;
            const badge_icon = badges[badge].icon_url.substring(badges[badge].icon_url.lastIndexOf('/')+1);
            
            badges_html += 
                "<div class='badge'>" +
                    "<h3>" + badge_name + "</h3>" +
                    "<img src='img/" + badge_icon + "'>" +
                    "<p><i>(" + course_list + ")</i></p>" +
                "</div>"
        }                
    }

    profile_badges.innerHTML = badges_html; // render results

    // scrollreveal.js
    ScrollReveal().reveal('.badge');

} ());