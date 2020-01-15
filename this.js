var guide = {
    title: 'Guide to programming',
    content: 'Content goes here',
    visibleToUser: function (viewingUserRole) {
        if (viewingUserRole === 'paid') {
            return true;
        } else {
            return false;
        }
    },
    renderContent: function(userRole) {
        if (this.visibleToUser(userRole)) {
            console.log(this.title + " - " + this.content)
        } else {
            this.content = '';
            console.log(this.title + " - " + this.content)
        }
    }
}

user = { role: 'unpaid'}
guide.renderContent(user.role)