const TelegrafI18n = require('telegraf-i18n');
const path = require("path");

const i18n = new TelegrafI18n({
    useSession: true,
    defaultLanguage: 'uz',
    defaultLanguageOnMissing: true,
    directory: path.resolve(__dirname, "../locales"),
    templateData: {
        pluralize: TelegrafI18n.pluralize
    }
})

module.exports = i18n;