chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.functionToApply === "addNewAgent") {
    document.getElementById("addNewAgentForm:lastName").value = "qa";
    document.getElementById("addNewAgentForm:firstName").value = "marc";
  } else if (request.functionToApply === "general") {
    document.getElementById("agentInfoForm:msgdspnmtxtGeneralInfo").value = "qamarc"
    document.getElementById("agentInfoForm:usrdspnmtxtGeneralInfo").value = "qamarc"
    document.getElementById("agentInfoForm:_repeat_email:0:agietdrp").selectedIndex = 5;
    const inputElement = document.querySelector('input#agentInfoForm\\:aginntxt');
    inputElement.value = 'qamarc';
    document.getElementById("agentInfoForm:_repeat_email:0:agiedtxt").value = "marclester@rtzassociates.com"
    const selectElement = document.querySelector('select#agentInfoForm\\:_repeat_email\\:0\\:agietdrp.w90');
    for (let i = 0; i < selectElement.options.length; i++) {
      const option = selectElement.options[i];
      if (option.text === "Work") {
        option.selected = true;
        break;
      }
    }
    var selectSite = document.getElementById("agentInfoForm:agentLocations");
    for (var i = 0; i < selectSite.options.length; i++) {
      selectSite.options[i].selected = true;
    }
  } else if (request.functionToApply === "employment") {
    const selectElement = document.querySelectorAll('select#agentInfoForm\\:tOKbI332323, select#agentInfoForm\\:tOKbI332')[0];
    const options = selectElement.querySelectorAll('option');
    options.forEach(option => {
      const text = option.textContent.trim();
      if (
        text === 'Physician/Medical' ||
        text === 'Social Work' ||
        text === 'Nursing' ||
        text === 'Occupational Therapy' ||
        text === 'Physical Therapy' ||
        text === 'Registered Nurse' ||
        text === 'Intake Coordinator'
      ) {
        option.selected = true;
      }
    });

    // NEW CODE 03-25
    var dropdown = document.getElementById("agentInfoForm:tjKiSM31");
    for (var i = 0; i < dropdown.options.length; i++) {
      if (dropdown.options[i].text === "Intake Coordinator") {
        // Set the selected index to the index of the "Intake Coordinator" option
        dropdown.selectedIndex = i;
        break; // Exit the loop once the option is found
      }
    }
    var selectElementVersionTwo = document.getElementById("agentInfoForm:tBryJy29");
    for (var i = 0; i < selectElementVersionTwo.options.length; i++) {
      if (selectElementVersionTwo.options[i].value === "PhD" || selectElementVersionTwo.options[i].textContent === "PhD") {
        selectElementVersionTwo.options[i].selected = true;
      }
      if (selectElementVersionTwo.options[i].value === "RN" || selectElementVersionTwo.options[i].textContent === "RN") {
        selectElementVersionTwo.options[i].selected = true;
      }
    }
    var event = new Event('change');
    selectElementVersionTwo.dispatchEvent(event);
    // NEW CODE 03-25

    selectElement.dispatchEvent(new Event('change'));
    const selectStatus = document.querySelector('select#agentInfoForm\\:asldrp.w150');
    const options2 = selectStatus.options;
    for (let i = 0; i < options2.length; i++) {
      const option = options2[i];
      if (option.text === "Full-Time") {
        option.selected = true;
        break;
      }
    }
    $(document).ready(function () {
      $('#agentInfoForm\\:aiccchk').attr('checked', 'checked');
      $('.incClinicCal').css('visibility', 'visible');
      $('input.cr1[value="1"]').click();
    });
  } else if (request.functionToApply === "preferences") {
    // document.getElementById("agentInfoForm:usrnmetxt").value = "qamarc";
    // document.getElementById("agentInfoForm:pwdscrttxt").value = "Test!234";
    // document.getElementById("agentInfoForm:rtpwdscrttxt").value = "Test!234";
    // document.getElementById("agentInfoForm:sigpwdscrttxt").value = "Test!2345";
    // document.getElementById("agentInfoForm:rtpsigpwdscrttxt").value = "Test!2345";
    // document.getElementById("agentInfoForm:txtsignaturasdfasd").value = "10";
    // const selectElement1 = document.getElementById('agentInfoForm:drp6bacli183');
    // selectElement1.querySelectorAll('option').forEach(option => {
    //   option.selected = true;
    // });
    // selectElement1.dispatchEvent(new Event('change'));
    // const selectElement2 = document.getElementById('agentInfoForm:drpdwnagentdefaultprogram');
    // selectElement2.querySelectorAll('option')[1].selected = true;
    // selectElement2.dispatchEvent(new Event('change'));

    document.getElementById("agentInfoForm:usrnmetxt").value = "qamarc";

    const pwdElement = document.getElementById("agentInfoForm:pwdscrttxt");
    if (pwdElement) {
      pwdElement.value = "Test!234";
    }

    const rtpwdElement = document.getElementById("agentInfoForm:rtpwdscrttxt");
    if (rtpwdElement) {
      rtpwdElement.value = "Test!234";
    }

    document.getElementById("agentInfoForm:sigpwdscrttxt").value = "Test!2345";
    document.getElementById("agentInfoForm:rtpsigpwdscrttxt").value = "Test!2345";
    document.getElementById("agentInfoForm:txtsignaturasdfasd").value = "10";

    const selectElement1 = document.getElementById('agentInfoForm:drp6bacli183');
    selectElement1.querySelectorAll('option').forEach(option => {
      option.selected = true;
    });
    selectElement1.dispatchEvent(new Event('change'));
    const selectElement2 = document.getElementById('agentInfoForm:drpdwnagentdefaultprogram');
    selectElement2.querySelectorAll('option')[-1].selected = true;
    selectElement2.dispatchEvent(new Event('change'));
  } else if (request.functionToApply === "preferencesLongPassword") {
    // document.getElementById("agentInfoForm:usrnmetxt").value = "qamarc";
    // document.getElementById("agentInfoForm:pwdscrttxt").value = "Test!2345678";
    // document.getElementById("agentInfoForm:rtpwdscrttxt").value = "Test!2345678";
    // document.getElementById("agentInfoForm:sigpwdscrttxt").value = "Test!23456789";
    // document.getElementById("agentInfoForm:rtpsigpwdscrttxt").value = "Test!23456789";
    // document.getElementById("agentInfoForm:txtsignaturasdfasd").value = "10";
    // const selectElement1 = document.getElementById('agentInfoForm:drp6bacli183');
    // selectElement1.querySelectorAll('option').forEach(option => {
    //   option.selected = true;
    // });
    // selectElement1.dispatchEvent(new Event('change'));
    // const selectElement2 = document.getElementById('agentInfoForm:drpdwnagentdefaultprogram');
    // selectElement2.querySelectorAll('option')[1].selected = true;
    // selectElement2.dispatchEvent(new Event('change'));

    document.getElementById("agentInfoForm:usrnmetxt").value = "qamarc";

    const pwdElement = document.getElementById("agentInfoForm:pwdscrttxt");
    if (pwdElement) {
      pwdElement.value = "Test!2345678";
    }

    const rtpwdElement = document.getElementById("agentInfoForm:rtpwdscrttxt");
    if (rtpwdElement) {
      rtpwdElement.value = "Test!2345678";
    }

    document.getElementById("agentInfoForm:sigpwdscrttxt").value = "Test!23456789";
    document.getElementById("agentInfoForm:rtpsigpwdscrttxt").value = "Test!23456789";
    document.getElementById("agentInfoForm:txtsignaturasdfasd").value = "10";

    const selectElement1 = document.getElementById('agentInfoForm:drp6bacli183');
    selectElement1.querySelectorAll('option').forEach(option => {
      option.selected = true;
    });
    selectElement1.dispatchEvent(new Event('change'));
    const selectElement2 = document.getElementById('agentInfoForm:drpdwnagentdefaultprogram');
    selectElement2.querySelectorAll('option')[-1].selected = true;
    selectElement2.dispatchEvent(new Event('change'));
  } else if (request.functionToApply === "sites") {
    jQuery(document).ready(function () {
      jQuery('select').find('option').attr('selected', 'selected');
    });
  } else if (request.functionToApply === "roles") {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      const checkboxId = checkbox.id;
      if (
        checkboxId !== 'agentInfoForm:chk72hgfg300cpg5' &&
        checkboxId !== 'agentInfoForm:chk72hgfg300cpg7' &&
        checkboxId !== 'agentInfoForm:chk72hgfg300cpg6' &&
        checkboxId !== 'agentInfoForm:chk72hgfg300cpg8'
      ) {
        checkbox.checked = true;
      }
    });
    const selectOptions = document.querySelectorAll('select option');
    selectOptions.forEach(option => {
      const trimmedText = option.textContent.trim();
      if (trimmedText === "Admin" || trimmedText === "Can View/Edit Other Users My Workflow") {
        option.selected = true;
      }
    });
    const selectElement = document.querySelector('select[id="frmpaceuserpermission:servicePermissionLevelType"]');
    const options = selectElement.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].textContent.trim() === "Order") {
        options[i].selected = true;
        break;
      }
    }
  } else if (request.functionToApply === "permissions") {
    function setSelectedOptionByText(selectElement, text) {
      const options = selectElement.options;
      for (let i = 0; i < options.length; i++) {
        if (options[i].textContent.trim() === text) {
          options[i].selected = true;
          break;
        }
      }
    }
    function setCheckboxes() {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(function (checkbox) {
        var checkboxId = checkbox.id;
        if (
          checkboxId !== 'frmpaceuserpermission:usermarnUser' &&
          checkboxId !== 'frmpaceuserpermission:requiresCoSignature' &&
          checkboxId !== 'frmpaceuserpermission:requiresCoSignatureForGrievance' &&
          checkboxId !== 'frmpaceuserpermission:uccschk' &&
          checkboxId !== 'frmpaceuserpermission:uccschkGrievance'
        ) {
          checkbox.checked = true;
        }
      });
    }
    document.querySelectorAll('select option').forEach(function (option) {
      const text = option.textContent.trim();
      const parentTr = option.closest('tr');
      if (!(parentTr && parentTr.querySelector('td') && parentTr.querySelector('td').textContent.trim() === 'New Day Center')) {
        if (text === 'Admin' ||
          text === 'Can View/Edit Other Users My Workflow' ||
          text === 'Order' ||
          text === 'Regular Dash Board' ||
          text === 'All') {
          option.selected = true;
        }
      }
    });
    var regex = new RegExp("New Day Center", 'gi');
    var textNodes = document.evaluate('//text()', document.body, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0; i < textNodes.snapshotLength; i++) {
      var node = textNodes.snapshotItem(i);
      if (regex.test(node.textContent)) {
        var newNode = document.createElement('span');
        newNode.innerHTML = node.textContent.replace(regex, '<span style="background-color: yellow;">$&</span>');
        node.parentNode.replaceChild(newNode, node);
      }
    }
    const selectElement = document.getElementById('frmpaceuserpermission:tQT1Ko70');
    const options = selectElement.querySelectorAll('option');
    options.forEach(option => {
      option.setAttribute('selected', 'selected');
    });
    const selectElements = {
      'frmpaceuserpermission:servicePermissionLevelType': 'Order',
      'frmpaceuserpermission:dfltdshbdrp': 'Regular Dash Board',
      'frmpaceuserpermission:prmassessmentsdrp': 'All'
    };
    for (const id in selectElements) {
      const element = document.getElementById(id);
      if (element) {
        setSelectedOptionByText(element, selectElements[id]);
      }
    }
    const pgnlmtdrpElement = document.getElementById('frmpaceuserpermission:pgnlmtdrp');
    if (pgnlmtdrpElement) {
      pgnlmtdrpElement.value = '100';
    }
    const pgnlmtdrpElement2 = document.getElementById('frmpaceuserpermission:cmsmepldrp');
    if (pgnlmtdrpElement2) {
      pgnlmtdrpElement2.value = '15';
    }
    setCheckboxes();
  } else if (request.functionToApply === "michigan") {
    document.querySelector('input[name="participantcontactmanageradd:lastName"]').value = 'Green';
    document.querySelector('input[name="participantcontactmanageradd:firstName"]').value = 'Rachel';
    document.querySelector('input[name="participantcontactmanageradd:txt4d94ak55"]').value = '382-17-5699';
    const dropdown = document.getElementById('participantcontactmanageradd:gender');
    const femaleOption = Array.from(dropdown.options).find(option => option.textContent === 'Female');
    if (femaleOption) {
      femaleOption.selected = true;
      dropdown.dispatchEvent(new Event('change'));
    }
    document.querySelector('input[name="participantcontactmanageradd:participantDate"]').value = '10/02/1932';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hmkjKz1"]').value = '3763 Eagle Drive';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hyJ2KQ3"]').value = 'Livonia';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hAClpA5"]').value = '48154';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_phone:0:txtaddparticipantphonedescription"]').value = '734-779-6298';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_email:0:txtemaildescription"]').value = 'rachel.green@mailer.com';

    var div = document.getElementById("participantcontactmanageradd:pngReferralType");
    var selects = div.getElementsByTagName("select");
    function selectRandomOption(select) {
      var options = select.options;
      var randomIndex = Math.floor(Math.random() * options.length);
      options[randomIndex].selected = true;
    }
    for (var i = 0; i < selects.length; i++) {
      selectRandomOption(selects[i]);
    }
  } else if (request.functionToApply === "california") {
    document.querySelector('input[name="participantcontactmanageradd:lastName"]').value = 'Green';
    document.querySelector('input[name="participantcontactmanageradd:firstName"]').value = 'Rachel';
    document.querySelector('input[name="participantcontactmanageradd:txt4d94ak55"]').value = '562-93-6002';
    const dropdown = document.getElementById('participantcontactmanageradd:gender');
    const femaleOption = Array.from(dropdown.options).find(option => option.textContent === 'Female');
    if (femaleOption) {
      femaleOption.selected = true;
      dropdown.dispatchEvent(new Event('change'));
    }
    document.querySelector('input[name="participantcontactmanageradd:participantDate"]').value = '10/02/1932';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hmkjKz1"]').value = '462 Harrison Street';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hyJ2KQ3"]').value = 'San Francisco';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hAClpA5"]').value = '94107';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_phone:0:txtaddparticipantphonedescription"]').value = '415-517-1897';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_email:0:txtemaildescription"]').value = 'rachel.green@mailer.com';

    var div = document.getElementById("participantcontactmanageradd:pngReferralType");
    var selects = div.getElementsByTagName("select");
    function selectRandomOption(select) {
      var options = select.options;
      var randomIndex = Math.floor(Math.random() * options.length);
      options[randomIndex].selected = true;
    }
    for (var i = 0; i < selects.length; i++) {
      selectRandomOption(selects[i]);
    }
  } else if (request.functionToApply === "washington") {
    document.querySelector('input[name="participantcontactmanageradd:lastName"]').value = 'Green';
    document.querySelector('input[name="participantcontactmanageradd:firstName"]').value = 'Rachel';
    document.querySelector('input[name="participantcontactmanageradd:txt4d94ak55"]').value = '570-38-3837';
    const dropdown = document.getElementById('participantcontactmanageradd:gender');
    const femaleOption = Array.from(dropdown.options).find(option => option.textContent === 'Female');
    if (femaleOption) {
      femaleOption.selected = true;
      dropdown.dispatchEvent(new Event('change'));
    }
    document.querySelector('input[name="participantcontactmanageradd:participantDate"]').value = '10/02/1932';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hmkjKz1"]').value = '4683 Lawman Avenue';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hyJ2KQ3"]').value = 'Washington';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hAClpA5"]').value = '20005';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_phone:0:txtaddparticipantphonedescription"]').value = '703-229-0810';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_email:0:txtemaildescription"]').value = 'rachel.green@mailer.com';

    var div = document.getElementById("participantcontactmanageradd:pngReferralType");
    var selects = div.getElementsByTagName("select");
    function selectRandomOption(select) {
      var options = select.options;
      var randomIndex = Math.floor(Math.random() * options.length);
      options[randomIndex].selected = true;
    }
    for (var i = 0; i < selects.length; i++) {
      selectRandomOption(selects[i]);
    }
  } else if (request.functionToApply === "oklahoma") {
    document.querySelector('input[name="participantcontactmanageradd:lastName"]').value = 'Green';
    document.querySelector('input[name="participantcontactmanageradd:firstName"]').value = 'Rachel';
    document.querySelector('input[name="participantcontactmanageradd:txt4d94ak55"]').value = '446-56-1720';
    const dropdown = document.getElementById('participantcontactmanageradd:gender');
    const femaleOption = Array.from(dropdown.options).find(option => option.textContent === 'Female');
    if (femaleOption) {
      femaleOption.selected = true;
      dropdown.dispatchEvent(new Event('change'));
    }
    document.querySelector('input[name="participantcontactmanageradd:participantDate"]').value = '10/02/1932';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hmkjKz1"]').value = '803 Camel Back Road';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hyJ2KQ3"]').value = 'Tulsa';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hAClpA5"]').value = '74116';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_phone:0:txtaddparticipantphonedescription"]').value = '918-608-4502';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_email:0:txtemaildescription"]').value = 'rachel.green@mailer.com';

    var div = document.getElementById("participantcontactmanageradd:pngReferralType");
    var selects = div.getElementsByTagName("select");
    function selectRandomOption(select) {
      var options = select.options;
      var randomIndex = Math.floor(Math.random() * options.length);
      options[randomIndex].selected = true;
    }
    for (var i = 0; i < selects.length; i++) {
      selectRandomOption(selects[i]);
    }
  } else if (request.functionToApply === "losangeles") {
    document.querySelector('input[name="participantcontactmanageradd:lastName"]').value = 'Green';
    document.querySelector('input[name="participantcontactmanageradd:firstName"]').value = 'Rachel';
    document.querySelector('input[name="participantcontactmanageradd:txt4d94ak55"]').value = '663-01-0001';
    const dropdown = document.getElementById('participantcontactmanageradd:gender');
    const femaleOption = Array.from(dropdown.options).find(option => option.textContent === 'Female');
    if (femaleOption) {
      femaleOption.selected = true;
      dropdown.dispatchEvent(new Event('change'));
    }
    document.querySelector('input[name="participantcontactmanageradd:participantDate"]').value = '10/02/1932';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hmkjKz1"]').value = '2872 Byrd Lane';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hyJ2KQ3"]').value = 'Metairie';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hAClpA5"]').value = '70007';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_phone:0:txtaddparticipantphonedescription"]').value = '504-975-6632';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_email:0:txtemaildescription"]').value = 'rachel.green@mailer.com';

    var div = document.getElementById("participantcontactmanageradd:pngReferralType");
    var selects = div.getElementsByTagName("select");
    function selectRandomOption(select) {
      var options = select.options;
      var randomIndex = Math.floor(Math.random() * options.length);
      options[randomIndex].selected = true;
    }
    for (var i = 0; i < selects.length; i++) {
      selectRandomOption(selects[i]);
    }
  } else if (request.functionToApply === "florida") {
    document.querySelector('input[name="participantcontactmanageradd:lastName"]').value = 'Green';
    document.querySelector('input[name="participantcontactmanageradd:firstName"]').value = 'Rachel';
    document.querySelector('input[name="participantcontactmanageradd:txt4d94ak55"]').value = '261-80-7661';
    const dropdown = document.getElementById('participantcontactmanageradd:gender');
    const femaleOption = Array.from(dropdown.options).find(option => option.textContent === 'Female');
    if (femaleOption) {
      femaleOption.selected = true;
      dropdown.dispatchEvent(new Event('change'));
    }
    document.querySelector('input[name="participantcontactmanageradd:participantDate"]').value = '10/02/1932';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hmkjKz1"]').value = '4465 Amethyst Drive';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hyJ2KQ3"]').value = 'Bronson';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hAClpA5"]').value = '49028';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_phone:0:txtaddparticipantphonedescription"]').value = '517-369-2206';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_email:0:txtemaildescription"]').value = 'rachel.green@mailer.com';

    var div = document.getElementById("participantcontactmanageradd:pngReferralType");
    var selects = div.getElementsByTagName("select");
    function selectRandomOption(select) {
      var options = select.options;
      var randomIndex = Math.floor(Math.random() * options.length);
      options[randomIndex].selected = true;
    }
    for (var i = 0; i < selects.length; i++) {
      selectRandomOption(selects[i]);
    }
  } else if (request.functionToApply === "indiana") {
    document.querySelector('input[name="participantcontactmanageradd:lastName"]').value = 'Green';
    document.querySelector('input[name="participantcontactmanageradd:firstName"]').value = 'Rachel';
    document.querySelector('input[name="participantcontactmanageradd:txt4d94ak55"]').value = '309-09-1651';
    const dropdown = document.getElementById('participantcontactmanageradd:gender');
    const femaleOption = Array.from(dropdown.options).find(option => option.textContent === 'Female');
    if (femaleOption) {
      femaleOption.selected = true;
      dropdown.dispatchEvent(new Event('change'));
    }
    document.querySelector('input[name="participantcontactmanageradd:participantDate"]').value = '10/02/1932';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hmkjKz1"]').value = '2041 Cessna Drive';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hyJ2KQ3"]').value = 'Fort Wayne';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hAClpA5"]').value = '46804';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_phone:0:txtaddparticipantphonedescription"]').value = '260-435-5924';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_email:0:txtemaildescription"]').value = 'rachel.green@mailer.com';

    var div = document.getElementById("participantcontactmanageradd:pngReferralType");
    var selects = div.getElementsByTagName("select");
    function selectRandomOption(select) {
      var options = select.options;
      var randomIndex = Math.floor(Math.random() * options.length);
      options[randomIndex].selected = true;
    }
    for (var i = 0; i < selects.length; i++) {
      selectRandomOption(selects[i]);
    }
  } else if (request.functionToApply === "kentucky") {
    document.querySelector('input[name="participantcontactmanageradd:lastName"]').value = 'Green';
    document.querySelector('input[name="participantcontactmanageradd:firstName"]').value = 'Rachel';
    document.querySelector('input[name="participantcontactmanageradd:txt4d94ak55"]').value = '573-82-4470';
    const dropdown = document.getElementById('participantcontactmanageradd:gender');
    const femaleOption = Array.from(dropdown.options).find(option => option.textContent === 'Female');
    if (femaleOption) {
      femaleOption.selected = true;
      dropdown.dispatchEvent(new Event('change'));
    }
    document.querySelector('input[name="participantcontactmanageradd:participantDate"]').value = '10/02/1932';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hmkjKz1"]').value = '2436 New York Avenue';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hyJ2KQ3"]').value = 'Anaheim';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hAClpA5"]').value = '92801';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_phone:0:txtaddparticipantphonedescription"]').value = '818-230-9275';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_email:0:txtemaildescription"]').value = 'rachel.green@mailer.com';

    var div = document.getElementById("participantcontactmanageradd:pngReferralType");
    var selects = div.getElementsByTagName("select");
    function selectRandomOption(select) {
      var options = select.options;
      var randomIndex = Math.floor(Math.random() * options.length);
      options[randomIndex].selected = true;
    }
    for (var i = 0; i < selects.length; i++) {
      selectRandomOption(selects[i]);
    }
  } else if (request.functionToApply === "missouri") {
    document.querySelector('input[name="participantcontactmanageradd:lastName"]').value = 'Green';
    document.querySelector('input[name="participantcontactmanageradd:firstName"]').value = 'Rachel';
    document.querySelector('input[name="participantcontactmanageradd:txt4d94ak55"]').value = '500-36-6240';
    const dropdown = document.getElementById('participantcontactmanageradd:gender');
    const femaleOption = Array.from(dropdown.options).find(option => option.textContent === 'Female');
    if (femaleOption) {
      femaleOption.selected = true;
      dropdown.dispatchEvent(new Event('change'));
    }
    document.querySelector('input[name="participantcontactmanageradd:participantDate"]').value = '10/02/1932';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hmkjKz1"]').value = '2421 Oak Lane';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hyJ2KQ3"]').value = 'Moberly';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hAClpA5"]').value = '65270';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_phone:0:txtaddparticipantphonedescription"]').value = '660-998-6479';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_email:0:txtemaildescription"]').value = 'rachel.green@mailer.com';

    var div = document.getElementById("participantcontactmanageradd:pngReferralType");
    var selects = div.getElementsByTagName("select");
    function selectRandomOption(select) {
      var options = select.options;
      var randomIndex = Math.floor(Math.random() * options.length);
      options[randomIndex].selected = true;
    }
    for (var i = 0; i < selects.length; i++) {
      selectRandomOption(selects[i]);
    }
  } else if (request.functionToApply === "pennsylvania") {
    document.querySelector('input[name="participantcontactmanageradd:lastName"]').value = 'Green';
    document.querySelector('input[name="participantcontactmanageradd:firstName"]').value = 'Rachel';
    document.querySelector('input[name="participantcontactmanageradd:txt4d94ak55"]').value = '205-78-9062';
    const dropdown = document.getElementById('participantcontactmanageradd:gender');
    const femaleOption = Array.from(dropdown.options).find(option => option.textContent === 'Female');
    if (femaleOption) {
      femaleOption.selected = true;
      dropdown.dispatchEvent(new Event('change'));
    }
    document.querySelector('input[name="participantcontactmanageradd:participantDate"]').value = '10/02/1932';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hmkjKz1"]').value = '1685 Pheasant Ridge Road';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hyJ2KQ3"]').value = 'Portland';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_address:0:hAClpA5"]').value = '97205';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_phone:0:txtaddparticipantphonedescription"]').value = '610-636-1823';
    document.querySelector('input[name="participantcontactmanageradd:_repeat_email:0:txtemaildescription"]').value = 'rachel.green@mailer.com';

    var div = document.getElementById("participantcontactmanageradd:pngReferralType");
    var selects = div.getElementsByTagName("select");
    function selectRandomOption(select) {
      var options = select.options;
      var randomIndex = Math.floor(Math.random() * options.length);
      options[randomIndex].selected = true;
    }
    for (var i = 0; i < selects.length; i++) {
      selectRandomOption(selects[i]);
    }
  } else if (request.functionToApply === "qaedOkInLiveWithRMTrackdown") {
    var issueStatusOptions = document.querySelectorAll('#issue_status_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "QA'ed - Ok in Live") {
        option.selected = true;
      }
    });
    var customFieldOptions = document.querySelectorAll('#issue_custom_field_values_11 option');
    customFieldOptions.forEach(function (option) {
      if (option.textContent === "Yes") {
        option.selected = true;
      }
    });
    var issueStatusOptions = document.querySelectorAll('#time_entry_activity_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "QA Hours") {
        option.selected = true;
      }
    });
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var formattedDate = mm + '/' + dd + '/' + yyyy;
    var newText = "\n*REDMINE-TRACK-DOWN-BUGS-RAN-IN-LIVE\nDate Pushed/Patched: " + formattedDate + "*\n";
    var issueNotesTextarea = document.getElementById('issue_notes');
    if (issueNotesTextarea) {
      var currentText = issueNotesTextarea.value.trim();
      var newTextLines = newText.trim().split('\n');
      var newTextExists = newTextLines.every(function (line) {
        return currentText.indexOf(line) !== -1;
      });
      if (!newTextExists) {
        issueNotesTextarea.value = currentText + newText;
      }
    }
  } else if (request.functionToApply === "qaedOkInLiveWithoutRMTrackdown") {
    var issueStatusOptions = document.querySelectorAll('#issue_status_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "QA'ed - Ok in Live") {
        option.selected = true;
      }
    });
    var customFieldOptions = document.querySelectorAll('#issue_custom_field_values_11 option');
    customFieldOptions.forEach(function (option) {
      if (option.textContent === "Yes") {
        option.selected = true;
      }
    });
    var issueStatusOptions = document.querySelectorAll('#time_entry_activity_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "QA Hours") {
        option.selected = true;
      }
    });
  } else if (request.functionToApply === "redmineTrackdown") {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var formattedDate = mm + '/' + dd + '/' + yyyy;
    var newText = "*REDMINE-TRACK-DOWN-BUGS-RAN-IN-LIVE\nDate Pushed/Patched: " + formattedDate + "*";
    var issueNotesTextarea = document.querySelector('textarea');
    if (issueNotesTextarea) {
      var currentText = issueNotesTextarea.value.trim();
      var newTextLines = newText.trim().split('\n');
      var newTextExists = newTextLines.every(function (line) {
        return currentText.indexOf(line) !== -1;
      });
      if (!newTextExists) {
        issueNotesTextarea.value = currentText + newText; z
      }
    }
  } else if (request.functionToApply === "qa") {
    var issueStatusOptions = document.querySelectorAll('#issue_status_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "Qa") {
        option.selected = true;
      }
    });
    var timeEntryHours = prompt("Enter time entry hours:");
    document.getElementById("time_entry_hours").value = timeEntryHours; // Adjust the ID if necessary
    var issueStatusOptions = document.querySelectorAll('#time_entry_activity_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "QA Hours") {
        option.selected = true;
      }
    });
  } else if (request.functionToApply === "testing") {
    var issueStatusOptions = document.querySelectorAll('#issue_status_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "Testing") {
        option.selected = true;
      }
    });
    var customFieldOptions = document.querySelectorAll('#issue_custom_field_values_2 option');
    customFieldOptions.forEach(function (option) {
      if (option.textContent === "Marc Mallari") {
        option.selected = true;
      }
    });
  } else if (request.functionToApply === "approved") {
    var issueStatusOptions = document.querySelectorAll('#issue_status_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "Approved") {
        option.selected = true;
      }
    });
    var customFieldOptions = document.querySelectorAll('#issue_custom_field_values_11 option');
    customFieldOptions.forEach(function (option) {
      if (option.textContent === "Yes") {
        option.selected = true;
      }
    });
  } else if (request.functionToApply === "reopened") {
    var issueStatusOptions = document.querySelectorAll('#issue_status_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "Reopened") {
        option.selected = true;
      }
    });
    var customFieldOptions = document.querySelectorAll('#issue_custom_field_values_2 option');
    customFieldOptions.forEach(function (option) {
      if (option.textContent === "Marc Mallari") {
        option.selected = true;
      }
    });
    var issueStatusOptions = document.querySelectorAll('#time_entry_activity_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "QA Hours") {
        option.selected = true;
      }
    });
  } else if (request.functionToApply === "resolved") {
    var issueStatusOptions = document.querySelectorAll('#issue_status_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "Resolved") {
        option.selected = true;
      }
    });
    var customFieldOptions = document.querySelectorAll('#issue_custom_field_values_2 option');
    customFieldOptions.forEach(function (option) {
      if (option.textContent === "Marc Mallari") {
        option.selected = true;
      }
    });
    var issueStatusOptions = document.querySelectorAll('#time_entry_activity_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "QA Hours") {
        option.selected = true;
      }
    });
  } else if (request.functionToApply === "resolvedNotAnIssue") {
    var issueStatusOptions = document.querySelectorAll('#issue_status_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "Resolved-Not an Issue") {
        option.selected = true;
      }
    });
    var customFieldOptions = document.querySelectorAll('#issue_custom_field_values_2 option');
    customFieldOptions.forEach(function (option) {
      if (option.textContent === "Marc Mallari") {
        option.selected = true;
      }
    });
    var issueStatusOptions = document.querySelectorAll('#time_entry_activity_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "QA Hours") {
        option.selected = true;
      }
    });
  } else if (request.functionToApply === "qaedInStaging") {
    var issueStatusOptions = document.querySelectorAll('#issue_status_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "QA'ed in Staging") {
        option.selected = true;
      }
    });
    var customFieldOptions = document.querySelectorAll('#issue_custom_field_values_2 option');
    customFieldOptions.forEach(function (option) {
      if (option.textContent === "Marc Mallari") {
        option.selected = true;
      }
    });
    var timeEntryHours = prompt("Enter time entry hours:");
    document.getElementById("time_entry_hours").value = timeEntryHours; // Adjust the ID if necessary
    var issueStatusOptions = document.querySelectorAll('#time_entry_activity_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "QA Hours") {
        option.selected = true;
      }
    });
  } else if (request.functionToApply === "onHoldRequiresRTZFeedback") {
    var issueStatusOptions = document.querySelectorAll('#issue_status_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "On hold - Requires RTZ Feedback") {
        option.selected = true;
      }
    });
    var customFieldOptions = document.querySelectorAll('#issue_custom_field_values_2 option');
    customFieldOptions.forEach(function (option) {
      if (option.textContent === "Marc Mallari") {
        option.selected = true;
      }
    });
    var issueStatusOptions = document.querySelectorAll('#time_entry_activity_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "QA Hours") {
        option.selected = true;
      }
    });
  } else if (request.functionToApply === "addinTV") {
    // $("select#issue_fixed_version_id").val("5189");

    // Ask the user for the value
    var userInput = prompt("Please enter the Target Version ID:");

    // Set the value of the select element using the user's input
    $("select#issue_fixed_version_id").val(userInput);
  } else if (request.functionToApply === "updateTV") {
    // $("select#values_fixed_version_id_1").val("5237");

    // Ask the user for the value
    var userInput = prompt("Please enter the Target Version ID:");

    // Set the value of the select element using the user's input
    $("select#values_fixed_version_id_1").val(userInput);
  } else if (request.functionToApply === "logtime") {
    $(document).ready(function () {
      const currentDate = new Date();
      const formattedDate = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}-${currentDate.getFullYear()}`;
      const notes = [
        "→ Checked and Consolidated Assigned Issues from Email, Mattermost, and QA Daily",
        "→ Checked Reminders and Endorsements from TLs in Email, Mattermost, and Google Sheet",
        "→ Updated the Status of Assigned Issues in QA Daily Tasks Document",
        "→ Coordinated with ITs for Bug Deployment and Reporting of IT-Related Issues",
        "→ Coordinated with CO QAs for Logic Confirmation and Reported Issues",
        "→ Consolidated Checked Bugs for Future Reference",
        "→ Provided an Update to QA TL in Mattermost",
        "→ Checked Resolved Bugs in CAESAR Staging",
        "→ SCP & MULTICARE Interface Monitoring",
        "→ CO QA Meeting"
      ];
      const notesText = notes.join('\n');
      const existingNotes = $('#issue_notes').val();
      const dateExists = existingNotes.includes(formattedDate);
      if (!dateExists) {
        const updatedNotes = `${formattedDate}\n\n${notesText}`;
        $('#issue_notes').val(existingNotes ? existingNotes + '\n' + updatedNotes : updatedNotes);
      }
    });
    // Get user input for time entry hours
    var timeEntryHours = prompt("Enter time entry hours:");
    document.getElementById("time_entry_hours").value = timeEntryHours; // Adjust the ID if necessary
    var issueStatusOptions = document.querySelectorAll('#time_entry_activity_id option');
    issueStatusOptions.forEach(function (option) {
      if (option.textContent === "QA Hours") {
        option.selected = true;
      }
    });
  } else if (request.functionToApply === "checkAllCheckbox") {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = true;
    });

    const selectElements = document.querySelectorAll('select');
    selectElements.forEach((select) => {
      if (select.options.length > 1) {
        const randomIndex = Math.floor(Math.random() * (select.options.length - 1)) + 1;
        select.selectedIndex = randomIndex;
      }
    });
    const radioGroups = document.querySelectorAll('input[type="radio"]:not(.datepicker)');
    radioGroups.forEach((radioGroup) => {
      if (!radioGroup.checked) {
        const radios = document.getElementsByName(radioGroup.name);
        const randomIndex = Math.floor(Math.random() * radios.length);
        radios[randomIndex].checked = true;
      }
    });
  } else if (request.functionToApply === "highlightActiveElements") {
    var elements = document.querySelectorAll('input, a, button');
    elements.forEach(function (element) {
      element.style.backgroundColor = 'yellow';
      element.style.color = 'black';
    });
  } else if (request.functionToApply === "loremIpsum") {
    function generateLoremIpsum() {
      return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 1234567890!@#$%^&*()_+{}[]|\:;\",. Nulla facilisi. Proin fermentum, odio id blandit varius, metus diam viverra ipsum, sit amet finibus dui purus vel nibh. Duis vehicula turpis non lectus bibendum fermentum. Fusce non ipsum volutpat, ultricies elit eget, laoreet nulla. Integer sed sagittis purus. Vivamus luctus lorem id urna euismod luctus. Donec consequat, dolor at consequat varius, ipsum sapien congue arcu, at vehicula libero justo non neque. Mauris vehicula sapien eget nunc lacinia, sed posuere ipsum rhoncus. Nam cursus eros at lorem congue, vitae convallis sapien feugiat. Sed id velit ac elit tincidunt consequat. Quisque finibus quam id felis malesuada, id interdum nisi pulvinar. Cras blandit nulla id urna varius, quis condimentum magna ultricies. Duis laoreet turpis in ex pulvinar, nec dictum dui varius. Nam pharetra lectus eget tellus lobortis faucibus. Duis et elit quis purus finibus efficitur. Vivamus convallis, libero at viverra tincidunt, nulla nisl vulputate dolor, eu feugiat sem nisi ac neque.';
    }
    const inputFields = document.querySelectorAll('input[type="text"], textarea');
    inputFields.forEach((input) => {
      if (!input.classList.contains('datepicker') && input.id !== 'ParticipantSelect:suggest' && input.tagName !== 'SELECT') {
        input.value = generateLoremIpsum();
      }
    });
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = true;
    });
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach((select) => {
      if (select.options.length > 1) {
        const randomIndex = Math.floor(Math.random() * (select.options.length - 1)) + 1;
        select.selectedIndex = randomIndex;
      }
    });
    const radioGroups = document.querySelectorAll('input[type="radio"]:not(.datepicker)');
    radioGroups.forEach((radioGroup) => {
      if (!radioGroup.checked) {
        const radios = document.getElementsByName(radioGroup.name);
        const randomIndex = Math.floor(Math.random() * radios.length);
        radios[randomIndex].checked = true;
      }
    });
  } else if (request.functionToApply === "interfaceMonitoringCounts") {
    var today = new Date();
    var yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    var formattedYesterday = ('0' + (yesterday.getMonth() + 1)).slice(-2) + '/' + ('0' + yesterday.getDate()).slice(-2) + '/' + yesterday.getFullYear();
    var dateToSearch = formattedYesterday;
    var regexPattern = new RegExp(dateToSearch, 'g');
    var allMatches = document.body.innerText.match(regexPattern);
    if (allMatches && allMatches.length > 0) {
      var count = allMatches.length - 1;
      alert('Number of instances of ' + dateToSearch + ' found in the page (minus one): ' + count);
    } else {
      alert('No instances of ' + dateToSearch + ' found in the page.');
    }
  } else if (request.functionToApply === "myCaseload") {
    var selectElements = document.getElementsByTagName('select');
    for (var i = 0; i < selectElements.length; i++) {
      var selectElement = selectElements[i];
      for (var j = 0; j < selectElement.options.length; j++) {
        var option = selectElement.options[j];
        if (option.text === 'qa, marc' || option.text === 'RTZ, Support') {
          option.selected = true;
          break;
        }
      }
    }
  } else if (request.functionToApply === "reportFilter") {
    var inputField = document.querySelector('[id*="startDate"], [id*="StartDate"], [id*="datestart"], [id*="dp1709862426068"]');
    // var inputField = document.querySelector('[id*="StartDate"]');
    if (inputField) {
      inputField.value = "01/01/2023";
    } else {
      console.error("Input field not found");
    }
    var inputField = document.querySelector('[id*="endDate"], [id*="EndDate"], [id*="dateend"], [id*="dp1709862426069"]');
    // var inputField = document.querySelector('[id*="EndDate"]');
    if (inputField) {
      inputField.value = "12/31/2023";
    } else {
      console.error("Input field not found");
    }
  } else if (request.functionToApply === "numberOfDivs") {
    function countOccurrences(terms) {
      var bodyText = document.body.innerText.toLowerCase();
      var counts = {};
      terms.forEach(function (term) {
        counts[term] = (bodyText.match(new RegExp('\\b' + term + '\\b', 'gi')) || []).length - 1;
      });
      return counts;
    }
    console.log("==========================================");
    function main() {
      var searchTerms = ["Hot", "Mild", "Cold"];
      var counts = countOccurrences(searchTerms.map(term => term.toLowerCase()));
      Object.keys(counts).forEach(function (term) {
        console.log(term + ": " + counts[term]);
        // console.log("Number of occurrences of '" + term + "': " + counts[term]);
      });
    }
    main();
    var yellowDivs = document.querySelectorAll('div.pros-content-yel-cont.withAnonymousParticipant');
    var greenDivs = document.querySelectorAll('div.pros-content-gre-cont.withAnonymousParticipant');
    var yellowCount = yellowDivs.length;
    var greenCount = greenDivs.length;
    // console.log("Number of divs with class 'pros-content-yel-cont' and 'withAnonymousParticipant': " + yellowCount);
    // console.log("Number of divs with class 'pros-content-gre-cont' and 'withAnonymousParticipant': " + greenCount);
    var totalCount = yellowCount + greenCount;
    console.log("TOTAL COUNT: " + totalCount);
  } else if (request.functionToApply === "resetStyle") {
    document.querySelectorAll('link[rel="stylesheet"]').forEach(style => {
      style.remove();
    });
    document.querySelectorAll('*').forEach(element => {
      element.removeAttribute('style');
    });
    document.querySelectorAll('script').forEach(script => {
      script.remove();
    });
    document.querySelectorAll('*').forEach(element => {
      const clone = element.cloneNode(true);
      element.parentNode.replaceChild(clone, element);
    });
    document.querySelectorAll('iframe').forEach(iframe => {
      iframe.remove();
    });
    document.querySelectorAll('style').forEach(style => {
      style.remove();
    });
    document.querySelectorAll('svg style').forEach(style => {
      style.remove();
    });
    document.querySelectorAll('svg script').forEach(script => {
      script.remove();
    });
    document.querySelectorAll('body *').forEach(element => {
      Array.from(element.childNodes).forEach(childNode => {
        if (childNode.nodeType === 8) { // 8 is COMMENT_NODE
          childNode.remove();
        }
      });
    });
    console.log(document.documentElement.outerHTML);
  } else if (request.functionToApply === "removeStatus") {
    // Select all table rows
    const rows = document.querySelectorAll('table tr');

    // Loop through each row
    rows.forEach(row => {
      // Check if the row contains a cell with the text "Reopened" or "On hold - Requires RTZ Feedback"
      const containsTargetText = Array.from(row.cells).some(cell =>
        cell.textContent.includes('Reopened') ||
        cell.textContent.includes('On hold - Requires RTZ Feedback') ||
        cell.textContent.includes('Paused') ||
        cell.textContent.includes('Feedback') ||
        cell.textContent.includes('In Progress') ||
        cell.textContent.includes('Revised') ||
        cell.textContent.includes('Testing') ||
        cell.textContent.includes('Ran in live') ||
        cell.textContent.includes(`QA'ed in Staging`) ||
        cell.textContent.includes('For Merge') ||
        cell.textContent.includes('Closed') ||
        cell.textContent.includes('Approved') ||
        cell.textContent.includes('Qa') ||
        cell.textContent.includes('On hold')
      );

      // If the row contains the target text, remove the row
      if (containsTargetText) {
        row.remove();
      }
    });
  } else if (request.functionToApply === "forCtools") {
    // Function to remove columns by header text
    function removeColumns(headerText) {
      let table = document.getElementById('issue-manager-list');
      if (!table) {
        console.error('Table not found.');
        return;
      }

      let headerRow = table.querySelector('thead tr');
      if (!headerRow) {
        console.error('Header row not found.');
        return;
      }

      // Find the index of the header cell with the specified text
      let columnIndex = -1;
      Array.from(headerRow.children).forEach((th, index) => {
        if (th.textContent.trim().includes(headerText)) {
          columnIndex = index;
        }
      });

      if (columnIndex === -1) {
        console.error(`Column '${headerText}' not found.`);
        return;
      }

      // Remove header cell
      headerRow.children[columnIndex].remove();

      // Remove corresponding cells in each row
      let rows = table.querySelectorAll('tbody tr');
      rows.forEach(row => {
        row.children[columnIndex].remove();
      });
    }

    // Columns to remove
    let columnsToRemove = ["Application Type", "Priority", "Submitted By", "Assigned To"];

    // Remove each specified column
    columnsToRemove.forEach(column => {
      removeColumns(column);
    });




    // Find all tables on the page
    const tables = document.querySelectorAll('table');

    // Iterate over each table
    tables.forEach(table => {
      // Find all rows in the table
      const rows = table.querySelectorAll('tr');

      // Iterate over each row
      rows.forEach(row => {
        // Check if column 8 contains the term "Support RTZ"
        const columns = row.querySelectorAll('td');

        // if (columns.length >= 7 && columns[5].textContent.trim() === 'Support RTZ') {
        //   // Remove the row
        //   row.remove();
        // }

        if (columns.length >= 7 && (columns[5].textContent.trim() === 'Support RTZ' || columns[5].textContent.trim() === 'Greyanne Tenedero' || columns[5].textContent.trim() === 'Ralph Emerson Rivera' || columns[5].textContent.trim() === 'Mayralyn Cabling')) {
          // Remove the row
          row.remove();
        }

      });
    });
  } else if (request.functionToApply === "displayCounts") {
    var bronsonLabResults = prompt("Enter the number of new messages for Bronson Lab results:");
    var labOrders = prompt("Enter the number of new messages for Lab Orders:");

    // Convert inputs to integers (assuming they are numbers)
    bronsonLabResults = parseInt(bronsonLabResults);
    labOrders = parseInt(labOrders);

    // Get current date
    var now = new Date();
    var month = (now.getMonth() + 1).toString().padStart(2, '0'); // getMonth() returns 0-based index
    var day = (now.getDate()).toString().padStart(2, '0');
    var year = now.getFullYear();
    var currentDate = month + '-' + day + '-' + year;

    // Get current time
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var currentTime = hours + ':' + minutes + ' ' + ampm;

    // Build the message with the entered counts and current date/time
    var message = `Hello po, PSG. As of ${currentDate} (${currentTime}), here are the updated counts po for the SCP Interface Monitoring.
--> Lab Orders (${labOrders} new messages) \n--> Bronson Lab Results (${bronsonLabResults} new messages)
Thank you po.`;

    // Create a temporary textarea element to copy the message to clipboard
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = message;
    tempTextArea.style.position = "fixed";  // Avoid scrolling to bottom
    document.body.appendChild(tempTextArea);
    tempTextArea.focus();
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    // Alert to notify the user
    alert(message);
  } else if (request.functionToApply === "supportBug") {
    // // Helper function to format the date as MM-DD-YYYY
    // function formatDateToMMDDYYYY(date) {
    //   var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month and add leading zero if necessary
    //   var day = date.getDate().toString().padStart(2, '0'); // Get day and add leading zero if necessary
    //   var year = date.getFullYear(); // Get full year
    //   return `${month}-${day}-${year}`; // Format the date as MM-DD-YYYY
    // }

    // // Load values from localStorage (if any)
    // function loadFormValues() {
    //   const storedTrackerValue = localStorage.getItem('trackerSelect');
    //   const storedSubjectValue = localStorage.getItem('subjectInput');
    //   const storedCustomFieldValue = localStorage.getItem('customFieldSelect');
    //   const storedDescriptionValue = localStorage.getItem('descriptionTextarea');

    //   if (storedTrackerValue) {
    //     document.getElementById('issue_tracker_id').value = storedTrackerValue;
    //   }

    //   if (storedSubjectValue) {
    //     document.getElementById('issue_subject').value = storedSubjectValue;
    //   }

    //   if (storedCustomFieldValue) {
    //     document.getElementById('issue_custom_field_values_25').value = storedCustomFieldValue;
    //   }

    //   if (storedDescriptionValue) {
    //     document.getElementById('issue_description').value = storedDescriptionValue;
    //   }
    // }

    // // Save values to localStorage
    // function saveFormValues() {
    //   const trackerSelect = document.getElementById('issue_tracker_id').value;
    //   const subjectInput = document.getElementById('issue_subject').value;
    //   const customFieldSelect = document.getElementById('issue_custom_field_values_25').value;
    //   const descriptionTextarea = document.getElementById('issue_description').value;

    //   localStorage.setItem('trackerSelect', trackerSelect);
    //   localStorage.setItem('subjectInput', subjectInput);
    //   localStorage.setItem('customFieldSelect', customFieldSelect);
    //   localStorage.setItem('descriptionTextarea', descriptionTextarea);
    // }

    // // Call the load function when the page loads
    // window.onload = function () {
    //   loadFormValues(); // Load previously stored values

    //   // Set default values if they are empty
    //   var trackerSelect = document.getElementById('issue_tracker_id');
    //   if (!trackerSelect.value) {
    //     trackerSelect.value = '3'; // Set the value to "Support"
    //     var event = new Event('change');
    //     trackerSelect.dispatchEvent(event);
    //   }

    //   var subjectInput = document.getElementById('issue_subject');
    //   if (!subjectInput.value) {
    //     var today = formatDateToMMDDYYYY(new Date()); // Format today's date
    //     subjectInput.value = `PCO CAESAR PATCH EXCLUDING ASC MI AND INDIANA ${today}: LIVE SITE CHECKING`;
    //   }

    //   var customFieldSelect = document.getElementById('issue_custom_field_values_25');
    //   if (!customFieldSelect.value) {
    //     customFieldSelect.value = '*0.1. General*'; // Set the value to "0.1 General"
    //   }

    //   var descriptionTextarea = document.getElementById('issue_description');
    //   if (!descriptionTextarea.value) {
    //     descriptionTextarea.value = `\nSelenium Start to Finished\nRun Reports\nQuick Check on Modules - (Manually)`;
    //   }

    //   // Save the form values whenever there's a change
    //   document.getElementById('issue_tracker_id').addEventListener('change', saveFormValues);
    //   document.getElementById('issue_subject').addEventListener('input', saveFormValues);
    //   document.getElementById('issue_custom_field_values_25').addEventListener('change', saveFormValues);
    //   document.getElementById('issue_description').addEventListener('input', saveFormValues);
    // };

    // Function to set values of specified elements
    function setIssueDetails() {
      // Set value for issue_project_id
      // document.getElementById("issue_project_id").value = "PCO - PACECare Online";

      // Set value for issue_tracker_id
      document.getElementById("issue_tracker_id").value = "3";

      // Get today's date and format it as MM-DD-YYYY
      const today = new Date();
      const formattedDate = `${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}-${today.getFullYear()}`;

      // Set value for issue_subject with today's date
      document.getElementById("issue_subject").value = `PCO CAESAR PATCH EXCLUDING ASC MI AND INDIANA ${formattedDate}: LIVE SITE CHECKING`;

      // Prompt user for input for issue_description
      const userInput = prompt("Please enter the issue description:");

      // Set value for issue_description with user input and additional text
      const descriptionText = `${userInput}\n\nSelenium Start to Finished\nRun Reports\nQuick Check on Modules - (Manually)`;
      document.getElementById("issue_description").value = descriptionText;

      // Set value for issue_custom_field_values_25
      // document.getElementById("issue_custom_field_values_25").value = "*0.1 General*";
    }

    // Call the function to execute
    setIssueDetails();
  } else if (request.functionToApply === "referenceBugs") {
    // Function to extract data from the table
    function extractTableData() {
      const rows = document.querySelectorAll('table.list tbody tr');
      const data = [];

      rows.forEach(row => {
        const idCell = row.querySelector('td.id a');
        const subjectCell = row.querySelector('td.subject a');

        if (idCell && subjectCell) {
          const id = idCell.textContent.trim();
          const subject = subjectCell.textContent.trim();
          data.push(`#${id} ${subject}`);
        }
      });

      return data.slice(0, 5); // Return only the first 5 rows
    }

    // Extract data
    const extractedData = extractTableData();

    // Format data for alert
    const dataText = extractedData.join('\n');
    alert(dataText); // Display only the first 5 items in an alert

    // Create a temporary textarea element for copying to clipboard
    const textarea = document.createElement('textarea');
    textarea.value = dataText;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      console.log('Data copied to clipboard');
    } catch (err) {
      console.error('Failed to copy data to clipboard', err);
    }
    document.body.removeChild(textarea); // Clean up
  } else if (request.functionToApply === "addNewAgent2") {
    // Get user input for last name and first name
    var name = prompt("Enter name:");

    // Set the values in the form
    document.getElementById("addNewAgentForm:lastName").value = name;
    document.getElementById("addNewAgentForm:firstName").value = name;
  } else if (request.functionToApply === "general2") {
    // Get user input for general information
    var name = prompt("Enter name:");
    document.getElementById("agentInfoForm:msgdspnmtxtGeneralInfo").value = name;
    document.getElementById("agentInfoForm:usrdspnmtxtGeneralInfo").value = name;
    document.getElementById("agentInfoForm:_repeat_email:0:agietdrp").selectedIndex = 5;

    const inputElement = document.querySelector('input#agentInfoForm\\:aginntxt');
    inputElement.value = name;

    // Get user input for email (username part)
    var emailUsername = prompt("Enter email username (without domain):");
    document.getElementById("agentInfoForm:_repeat_email:0:agiedtxt").value = emailUsername + "@rtzassociates.com";

    // Set "Work" as selected in agietdrp
    const selectElement = document.querySelector('select#agentInfoForm\\:_repeat_email\\:0\\:agietdrp.w90');
    for (let i = 0; i < selectElement.options.length; i++) {
      const option = selectElement.options[i];
      if (option.text === "Work") {
        option.selected = true;
        break;
      }
    }

    // Select all options in agentLocations
    var selectSite = document.getElementById("agentInfoForm:agentLocations");
    for (var i = 0; i < selectSite.options.length; i++) {
      selectSite.options[i].selected = true;
    }
  } else if (request.functionToApply === "preferences2LongPassword") {
    // Get user input for username
    var username = prompt("Enter username:");
    document.getElementById("agentInfoForm:usrnmetxt").value = username;

    // Get user input for password
    var password = prompt("Enter password:");
    const pwdElement = document.getElementById("agentInfoForm:pwdscrttxt");
    if (pwdElement) {
      pwdElement.value = password;
    }

    // Get user input for repeat password
    const rtpwdElement = document.getElementById("agentInfoForm:rtpwdscrttxt");
    if (rtpwdElement) {
      rtpwdElement.value = password;
    }

    // Get user input for signature password
    var signaturePassword = prompt("Enter signature password:");
    document.getElementById("agentInfoForm:sigpwdscrttxt").value = signaturePassword;
    document.getElementById("agentInfoForm:rtpsigpwdscrttxt").value = signaturePassword;
    document.getElementById("agentInfoForm:txtsignaturasdfasd").value = "10";

    // Select all options in the first dropdown
    const selectElement1 = document.getElementById('agentInfoForm:drp6bacli183');
    selectElement1.querySelectorAll('option').forEach(option => {
      option.selected = true;
    });
    selectElement1.dispatchEvent(new Event('change'));

    // Select the last option in the second dropdown
    const selectElement2 = document.getElementById('agentInfoForm:drpdwnagentdefaultprogram');
    const options = selectElement2.querySelectorAll('option');
    options[options.length - 1].selected = true;
    selectElement2.dispatchEvent(new Event('change'));
  }
});  