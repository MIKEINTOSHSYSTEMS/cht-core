{
  const widgets = [
    require( 'enketo-core/src/widget/note/notewidget' ).default,
    require( 'enketo-core/src/widget/geo/geopicker' ).default,
    require( 'enketo-core/src/widget/table/tablewidget' ).default,
    require( 'enketo-core/src/widget/radio/radiopicker' ).default,
    require( 'enketo-core/src/widget/date/datepicker-extended' ).default,
    require( 'enketo-core/src/widget/time/timepicker-extended' ).default,
    require( 'enketo-core/src/widget/datetime/datetimepicker-extended' ).default,
    require( 'enketo-core/src/widget/columns/columns' ).default,
    require( 'enketo-core/src/widget/file/filepicker' ).default,
    require( 'enketo-core/src/widget/select-media/select-media' ).default,
    require( 'enketo-core/src/widget/range/range-widget' ).default,
    require( 'enketo-core/src/widget/url/url-widget' ).default,
    require( 'enketo-core/src/widget/text-max/text-max' ).default,
    require( 'enketo-core/src/widget/rating/rating' ).default,
    require( 'enketo-core/src/widget/thousands-sep/thousands-sep' ).default,
    require( 'enketo-core/src/widget/select-likert/likertitem' ).default,
    require( 'enketo-core/src/widget/select-desktop/selectpicker' ).default,
    require( 'enketo-core/src/widget/select-mobile/selectpicker' ).default,
    require( 'enketo-core/src/widget/analog-scale/analog-scalepicker' ).default,
    require( 'enketo-core/src/widget/textarea/textarea' ).default,
    require( 'enketo-core/src/widget/select-autocomplete/autocomplete' ).default,
    require( './widgets/countdown-widget' ),
    require( './widgets/db-object-widget' ),
    require( './widgets/phone-widget' ),
    require( './widgets/unselectable-radios' ),
    require( './widgets/android-datepicker' ),
    require( './widgets/bikram-sambat-datepicker' ),
    require( './widgets/mrdt' ),
    require( './widgets/android-app-launcher' ),
    require( './widgets/display-base64-image' ),
    require( './widgets/dynamic-url' ),
  ];

  module.exports = widgets;
}
