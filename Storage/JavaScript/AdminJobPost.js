function AcceptApplicant(id) {
  Swal.fire({
    title: "Accept Post",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Confirm",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        text: "Post Accepted",
        icon: "success",
        showConfirmButton: false,
      });
    }
  });
}

function RejectApplicant(id) {
  Swal.fire({
    title: "Reject Post",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Confirm",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        text: "Post Rejected",
        icon: "success",
        showConfirmButton: false,
      });
    }
  });
}
