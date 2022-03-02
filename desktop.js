module.exports = {
  ci: {
    // Doesn't seem to work.
    collect: {
      settings: {
      chromeFlags: '--no-sandbox',
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        width: 1080,
        height: 1920,
      }
    },
  },
    assert: {
      // assert options here
    },
    upload: {
      // upload options here
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};