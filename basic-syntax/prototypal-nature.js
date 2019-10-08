let user = function (ops) {
    return { 
        firstName: ops.firstName || 'John',
        lastName: ops.lastName || 'Doe',
        email: ops.email || 'test@test.com',
        name: function() { 
            return this.firstName + this.lastName
        }
    }
}
let agency = function(ops) {
    ops = ops || {}
    var agency = user(ops)
    agency.customers = ops.customers || 0
    agency.isAgency = true
    return agency
}
