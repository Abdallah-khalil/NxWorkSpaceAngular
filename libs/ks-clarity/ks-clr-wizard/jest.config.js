module.exports = {
  name: 'ks-clarity-ks-clr-wizard',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ks-clarity/ks-clr-wizard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
