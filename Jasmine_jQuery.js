//Jasmine jQuery

expect($('#test1').Text()).toBe('Hello');


expect($('#id')).toBe('div');


expect($('input[type=checkbox]')).toBeChecked();
expect($('input[type=checkbox]')).toBeDisabled();
expect($('input[type=checkbox]')).toBeFocused();
expect($('#menu ul')).toBeEmpty();


expect($('#toolbar')).toBeHidden();
expect($('#toolbar')).toBeVisible();


expect($('#popup')).toHaveCss({ margin: "10px" });
expect($('option')).toBeSelected();


expect($('.foo')).toExist();


expect($('a')).toHaveAttr('rel');
expect($('a')).toHaveAttr('rel', 'nofollow');


expect($('a')).toHaveClass('rel');
expect($('a')).toHaveId('home');


expect($('a')).toHaveHtml('<span></span>');
expect($('a')).toContainHtml('<span></span>');
expect($('a')).toHaveText('hi');


expect($form).toHandle('submit'); // event
expect($form).toHandleWith('submit', onSumbit);
