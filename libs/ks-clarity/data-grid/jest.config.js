module.exports = {
  name: 'ks-clarity-data-grid',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ks-clarity/data-grid',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
