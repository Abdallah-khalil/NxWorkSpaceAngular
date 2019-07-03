module.exports = {
  name: 'shared-ui-elements',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-elements',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
